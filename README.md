

# The Personal WIKI application synopsis
This project and application is a merge of various works by the author to achieve the following:
1. To demonstrate a simple React application for training purposes.
2. To provide the Personal WIKI for recording and classifying information according to your preferences.


### Quick Install TLDR; 
Install in this order on Mac OS
node:
```sh
	brew install node
```
json-server: node
```sh
	npm install -g json-server
```
jsondb:		# Start the json db server (uses a trivial JSON data source data/db.json)
```sh
	json-server --watch data/db.json --port 8000
```
install:	# Install the application
```sh
	cd src && npm install
```
start:	# Start the application
```sh
	cd src && npm start
```

## Makefile assistance.
In the project root directory there is a Makefile to encapsulate the various builds and options.
You can run this (if make is installed)
```sh
make
```
This will show the most up-to-date scripts that can be started and explain them - and should augment the comments below.
If make is not instaled - you can take a look at the make.hlp and the Makefile to see what commands can be run to install

## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Other Scripts (originals from the bootstrap)

Note these are encapsulated in the 'make' script above but remain documented here as per the original.

In the project directory (src), you can run these scripts manually:

### `npm start`
(Equivalent to running make start in the root folder)
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
