package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

var validationToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uY2VuYUBnbWFpbC5jb20ifQ.El_3xDDLnD0Rl2owtknAefKLDY2eejJaglGROdEq5rw"

func TestHealthcheckHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/health-check", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(healthcheckHandler)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf(
			"handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	expected := "ok"
	if rr.Body.String() != expected {
		t.Errorf(
			"handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}

func TestGraphqlHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/api/graphql?query={viewer{name,email}}", nil)
	req.Header.Add("X-Authorization-Token", validationToken)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(graphqlHandler)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf(
			"handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	expected := `{"data":{"viewer":{"email":"john.cena@gmail.com","name":"John Cena"}}}` + "\n"

	if rr.Body.String() != expected {
		t.Errorf(
			"handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}
