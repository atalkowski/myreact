package main

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type todo struct {
	ID        string `json:"id"`
	Item      string `json:"item"`
	Completed bool   `json:"completed"`
}

var todos = []todo{
	{ID: "1", Item: "Clean Room", Completed: false},
	{ID: "2", Item: "Read Book", Completed: false},
	{ID: "3", Item: "Reord Video", Completed: false},
}

// GET all todos
func getTodos(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todos)
}

// Add new todo
func addTodo(context *gin.Context) {
	var newTodo todo
	if err := context.BindJSON(&newTodo); err != nil {
		return // Duh failed!
	}
	todos = append(todos, newTodo)
	context.IndentedJSON(http.StatusCreated, newTodo)
}

func getTodoById(id string) (*todo, error) {
	for i, t := range todos {
		if t.ID == id {
			return &todos[i], nil
		}
	}
	return nil, errors.New("Failed to find id")
}

// GET handler a todo for a specific ID
func getTodo(context *gin.Context) {
	id := context.Param("id")
	todo, err := getTodoById(id)
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Todo not found"})
	}
	context.IndentedJSON(http.StatusOK, todo)
}

func patchTodo(context *gin.Context) {
	id := context.Param("id")
	todo, err := getTodoById(id)
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Todo not found"})
	}
	todo.Completed = !todo.Completed
	context.IndentedJSON(http.StatusOK, todo)
}

func main() {
	router := gin.Default()
	router.GET("/todos", getTodos)
	router.POST("/todos", addTodo)
	router.GET("/todos/:id", getTodo)
	router.PATCH("/todos/:id", patchTodo)
	router.Run("localhost:9090")
}
