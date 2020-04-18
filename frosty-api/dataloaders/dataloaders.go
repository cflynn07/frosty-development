package dataloaders

import (
	"fmt"

	"github.com/cflynn07/frosty-api/database"
	"github.com/cflynn07/frosty-api/types"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// GetNodeByID returns a database record for a given id
func GetNodeByID(id int) (*types.User, error) {
	user := &types.User{}
	database.DB.Where("idusers = ?", "1").First(user)
	return user, nil
}

// GetUserByUsernameAndPassword returns a user record for a given username and password
func GetUserByUsernameAndPassword(email string, password string) (*types.User, error) {
	user := &types.User{}
	if err := database.DB.Where("email = ?", email).First(user).Error; gorm.IsRecordNotFoundError(err) {
		// record not found
		return nil, nil
	}

	fmt.Println("user found")
	fmt.Println(user.Email)
	fmt.Println(user.Password)
	fmt.Println(user.BcryptPassword)
	fmt.Println(password)

	// Since we'll be getting the hashed password from the DB it
	// will be a string so we'll need to convert it to a byte slice
	err := bcrypt.CompareHashAndPassword([]byte(user.BcryptPassword), []byte(password))
	if err != nil {
		fmt.Println("found user but password doesn't match")
		return nil, nil
	}

	fmt.Println("password match")

	return user, nil
}
