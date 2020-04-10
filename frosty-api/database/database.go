package database

import (
	"fmt"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var DB *gorm.DB

func init() {
	var err error

	mysqlHost := os.Getenv("MYSQL_HOST")
	if mysqlHost == "" {
		log.Fatal("Missing ENV: MYSQL_HOST")
	}

	mysqlUser := os.Getenv("MYSQL_USER")
	if mysqlHost == "" {
		log.Fatal("Missing ENV: MYSQL_USER")
	}

	mysqlDB := os.Getenv("MYSQL_DB")
	if mysqlHost == "" {
		log.Fatal("Missing ENV: MYSQL_DB")
	}
	connectionString := fmt.Sprintf("%s@(%s)/%s", mysqlUser, mysqlHost, mysqlDB)
	fmt.Println(connectionString)
	log.Print("Connecting to MySQL: ", connectionString)

	DB, err = gorm.Open("mysql", connectionString)
	if err != nil {
		fmt.Println(err)
		panic("failed to connect database")
	}
}
