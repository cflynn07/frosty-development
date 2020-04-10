package types

import "github.com/graphql-go/graphql"

// User represents a "user" record in the database
type User struct {
	Email   string `json:"email"`
	Idusers int    `json:"idusers"`
	Name    string `json:"name"`
}

// GQLUser represents the "user" graphql resource
var GQLUser = graphql.NewObject(
	graphql.ObjectConfig{
		Name: "User",
		Fields: graphql.Fields{
			"idusers": &graphql.Field{
				Type: graphql.Int,
			},
			"name": &graphql.Field{
				Type: graphql.String,
			},
			"email": &graphql.Field{
				Type: graphql.String,
			},
		},
	},
)

// List represents a "list" record in the database
type List struct {
	Name string `json:"name"`
}
