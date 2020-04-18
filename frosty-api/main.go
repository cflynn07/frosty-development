package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/cflynn07/frosty-api/database"
	"github.com/cflynn07/frosty-api/dataloaders"
	"github.com/cflynn07/frosty-api/schema"
	"github.com/cflynn07/frosty-api/types"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"

	"github.com/graphql-go/graphql"
)

func executeQuery(query string, schema graphql.Schema) *graphql.Result {
	result := graphql.Do(graphql.Params{
		Schema:        schema,
		RequestString: query,
	})
	if len(result.Errors) > 0 {
		fmt.Printf("errors: %v", result.Errors)
	}
	return result
}

var jwtSecret []byte = []byte(os.Getenv("JWT_SECRET"))

func healthcheckHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "ok")
}

func graphqlHandler(w http.ResponseWriter, r *http.Request) {
	result := executeQuery(r.URL.Query().Get("query"), schema.Schema)
	json.NewEncoder(w).Encode(result)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	var user types.User
	_ = json.NewDecoder(r.Body).Decode(&user)

	if user.Email == "" || user.Password == "" {
		w.Header().Set("content-type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`{"error":"email and password required"}`))
		return
	}

	// reassign user with database populated
	dbUser, _ := dataloaders.GetUserByUsernameAndPassword(
		user.Email,
		user.Password,
	)

	if dbUser == nil {
		w.Header().Set("content-type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`{"error":"user not found"}`))
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email":    user.Email,
		"password": user.Password,
	})
	tokenString, error := token.SignedString(jwtSecret)
	if error != nil {
		fmt.Println(error)
	}
	// test comment
	w.Header().Set("content-type", "application/json")
	w.Write([]byte(`{ "token": "` + tokenString + `" }`))
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("Missing ENV: PORT")
	}

	router := mux.NewRouter()

	router.HandleFunc("/healthz", healthcheckHandler).Methods("GET")
	router.HandleFunc("/api/graphql", graphqlHandler).Methods("GET")
	router.HandleFunc("/api/login", loginHandler).Methods("POST")

	go func() {
		fmt.Println("Server is running on port ", port)
		panic(http.ListenAndServe(":"+port, router))
	}()

	// Try to gracefully shut things down
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt)
	signal.Notify(stop, syscall.SIGTERM)
	<-stop
	err := database.DB.Close()
	if err != nil {
		log.Printf("error closing database: %s", err)
	} else {
		log.Printf("server gracefully stopped")
	}
}
