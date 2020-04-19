package schema

import (
	"errors"
	"fmt"
	"os"

	"github.com/cflynn07/frosty-api/dataloaders"
	"github.com/cflynn07/frosty-api/types"
	"github.com/dgrijalva/jwt-go"
	"github.com/graphql-go/graphql"
	"github.com/mitchellh/mapstructure"
)

var jwtSecret []byte = []byte(os.Getenv("JWT_SECRET"))

func validateJWT(t string) (interface{}, error) {
	if t == "" {
		return nil, errors.New("Authorization token must be present")
	}

	token, _ := jwt.Parse(t, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("There was an error")
		}
		return jwtSecret, nil
	})
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		var decodedToken interface{}
		mapstructure.Decode(claims, &decodedToken)
		return decodedToken, nil
	}
	return nil, errors.New("Invalid authorization token")
}

type TestUser struct {
	Email string `json:"email"`
}

var queryType = graphql.NewObject(
	graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"viewer": &graphql.Field{
				Type:        types.GQLUser,
				Description: "returns current user",
				Resolve: func(p graphql.ResolveParams) (interface{}, error) {
					token, err := validateJWT(p.Context.Value("token").(string))
					if err != nil {
						fmt.Println("error... handle this")
						return nil, nil
					}

					// Todo validate
					email := token.(jwt.MapClaims)["email"].(string)
					user, err := dataloaders.GetUserByEmail(email)

					if err != nil {
						fmt.Println("error... handle this")
					}
					return user, nil
				},
			},
		},
	},
)

// Schema is base graphql schema
var Schema, _ = graphql.NewSchema(
	graphql.SchemaConfig{
		Query: queryType,
	},
)
