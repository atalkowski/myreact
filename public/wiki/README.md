
# MyWiki - what is it? 

Originally MyWiki was just a collection of software development topics rendered using just the static web site.
It is now a subpage within my test react project. That said - it is self contained in the src/wiki subfolder and (currently) totally independent of the react project. The react project should be able to display it though.

For this original MyWiki part, I needed to do smarter things than the static content could do.
Like opening new documents within an existing one without refreshing the page - to allow easier exploration of topics.
For me this involved reading a file using XMLHttpRequest for example - so the use of NodeJs as the web server became a way to allow this.
That works. 
Later I merged the wiki itself as a subpage of an experimental REACT web site that I was using for training in REACT.   

## Installation
If you go down the root avoiding react ....
The content could be browsed in a limited way as per the original simple web site - requiring no installation.
However, to serve content properly it is recommended you install a web server with this content as its source 
(hint - or just use the react project).

# With NodeJS
Either way - this implies you should install nodejs and npm latest. The wiki has notes on how to do this (catch 22 applies though) - but the pages for this are there as pure html + js.
After installing node JS which runs on port 3000 - just open up a terminal session and run this command from the src/wiki folder start the nodejs.
* http-server
The wiki iteself can then be found in http://127.0.0.1:8080/wiki.html 
# With Python 3
Similarly from that wiki subfolder there is a python 3 version web server.
This implies you should install python 3
Then run this command in the folder above the notes content directory:
*  python3 -m http.server 8080


## Usage

Once installed you can use either this from your browser:
*  file:///path-to-project/src/wiki/wiki.html   (limited version - where path-to-notes is the directory you unpacked this content)
or if you installed python successfully as shown in installation:
*  http://127.0.0.1:8080/src/wiki/wiki.html

The former would not support the yaml and other file rendering - only the 90% static content.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change. No commit/merges to main allowed except by owner.

## License

None so far. This is private at the moment. SOme content refers to other folk's web sites.
No guarantee of this content working and no liability accepted by owner - use at your own risk. 
