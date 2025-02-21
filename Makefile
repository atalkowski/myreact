

help:
	cat ./make.hlp

start:
	cd src && npm start

app:	start

test:
	cd src && npm test

install:
	cd src && npm install

build:
	cd src && npm run build

db: jsondb

jsondb:
	json-server --watch data/db.json --port 8000

go: gotodo

gotodo:
	cd go && go run main.go

# Installs you will require for this project
node:
	brew install node

json-server: node
	npm install -g json-server


	

