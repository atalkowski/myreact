

help:
	cat ./make.hlp

start:
	cd src && npm start

test:
	cd src && npm test

build:
	cd src && npm build

json: jsondb

db: jsondb

jsondb:
	json-server --watch data/db.json --port 8000

go: gotodo

gotodo:
	cd go && go run main.go


