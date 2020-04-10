package dataloaders

import (
	"github.com/cflynn07/frosty-api/database"
	"github.com/cflynn07/frosty-api/types"
)

// GetNodeByID returns a database record for a given id
func GetNodeByID(id int) (types.User, error) {
	var user types.User
	database.DB.Where("idusers = ?", "1").First(&user)
	return user, nil
}
