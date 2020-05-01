package types

import (
	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

// User represents a "user" record in the database
type User struct {
	Email          string `json:"email"`
	Idusers        int    `json:"idusers"`
	Name           string `json:"name"`
	Password       string `json:"password"`
	BcryptPassword string `json:"bcrypt_password"`
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

var GQLList = graphql.NewObject(
	graphql.ObjectConfig{
		Name: "List",
		Fields: graphql.Fields{
			"name": &graphql.Field{
				Type: graphql.String,
			},
			"todos": &graphql.Field{
				Type:        graphql.NewList(GQLTodo),
				Description: "Get todos",
				Resolve: func(params graphql.ResolveParams) (interface{}, error) {
					// return products, nil
					// pretty.Println(params)
					pretty.Println(params.Source)
					return []Todo{
						{
							Value: params.Source.(List).Name + " first todo",
							Done:  false,
						},
					}, nil
				},
			},
		},
	},
)

type Todo struct {
	Value string `json:"value"`
	Done  bool   `json:"done"`
}

var GQLTodo = graphql.NewObject(
	graphql.ObjectConfig{
		Name: "Todo",
		Fields: graphql.Fields{
			"value": &graphql.Field{
				Type: graphql.String,
			},
			"done": &graphql.Field{
				Type: graphql.Boolean,
			},
		},
	},
)
