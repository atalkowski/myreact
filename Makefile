

help:
	cat ./make.hlp

# Installs you will require for this project
node:
	brew install node

json-server: node
	npm install -g json-server

jsondb:		# Start the json db server (uses a trivial JSON data source data/db.json)
	json-server --watch data/db.json --port 8000

install:	# Install the application
	cd src && npm install

start:	# Start the application
	cd src && npm start


app:	start

test:
	cd src && npm test

build:		# Build optimized version
	cd src && npm run build

db: jsondb

go:
	cd go && go run main.go


	

