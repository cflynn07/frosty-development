package schema

import (
	"fmt"

	"github.com/cflynn07/frosty-api/dataloaders"
	"github.com/cflynn07/frosty-api/types"
	"github.com/graphql-go/graphql"
)

var queryType = graphql.NewObject(
	graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"viewer": &graphql.Field{
				Type:        types.GQLUser,
				Description: "returns current user",
				Resolve: func(p graphql.ResolveParams) (interface{}, error) {
					user, err := dataloaders.GetNodeByID(1)
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
