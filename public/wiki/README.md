
# MyWiki - what is it? 
Originally MyWiki was just a collection of software development topics rendered using just the static web site.
It is now a subpage within my test react project. That said - the wiki part is somewhat self contained in the public/wiki 
subfolder and (currently) fairly independent of the react project that contains it. 
The react project should be able to display it via its navbar code.

For this original wiki part, I wanted to do smarter things than the static content could do - 
like opening new documents within an existing one without refreshing the page - to allow easier exploration of topics.
For me this involved reading a file using XMLHttpRequest for example 
- so the use of NodeJs as the web server (and later React) became a way to allow this.
So I merged the wiki itself as a subpage of an experimental REACT web site that I was using for training in REACT.   

## Installation
### Minimal do nothing
The content could be browsed in a limited way as per the original simple web site - requiring no installation.
However, to serve content properly it is recommended you install a web server with this content as its source 
(hint - or just use the react project). Many of the View buttons for related content won't work unless using a server. So...

### Using the React project.
This requires you should install nodejs and npm latest. Use the WWW to discover how to do this.
The root directory of this project then has a Makefile that explains how to use the scripts etc to start the React app.
This will expose an locahost endpoint at http://localhost:3000 and the rest should all fall into place.
But it requires that you have set up npm, nodejs and other things so you should check the web for how to do this.
There are notes (as html) in the public/wiki/articles/Angular.html and other pages in the wiki content that can help.
But the WWW is best to do this probably.

# With NodeJS
For just WIKI content - this also requires you should install nodejs and npm latest. The wiki has notes on how to do this (catch 22 applies though as hinted at earlier) - but the pages for this are there as pure html + js. So use WWW to install npm + nodejs.
After installing node JS which runs on port 3000 - just open up a terminal session and run this command from the *public/wiki* folder to start the nodejs.
* http-server
The wiki iteself can then be found in http://127.0.0.1:8080/index.html 

# With Python 3
Similarly from that wiki subfolder there is a python 3 version web server.
This implies you should install python 3
Then run this command in the folder above the notes content directory:
*  python3 -m http.server 8080

## Usage
Once installed you can use either this from your browser:
* React version: http://localhost:3000 and follow links for the WIKI page.
* Note for the react version that unless you started the dbjson server (using make db in a separate reminal) you will get errors.
* Limited do nothing version: Point your browser at file:///path-to-project/public/wiki/index.html 
* Python version: http://127.0.0.1:8080/index.html
* Nodejs version: http://127.0.0.1:3000/index.html


## Contributing
At the moment this is a sandpit for me to play with various technology - so I've blocked any updates by anyone else.
When I can figure out how to allow comments in github I will open up to 3rd party changes.

## License
This content is not licenced - and contains notes gleaned from the public web of others. 
No guarantee is given for use of this content and no liability accepted if cloned - it is at your own risk. 
