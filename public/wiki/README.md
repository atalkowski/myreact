
# Notes  

Notes is a collection of documents implemented as a simple web site.

## Installation

The content is that of a simple web site - requiring minimal installation - for use by its author.
However, to serve content properly it is recommended to use a web server with this content as its source.

# With NodeJS
This implies you should install nodejs and npm latest.
Then run this command from the notes content directory:
* http-server

# With Python 3
This implies you should install python 3
Then run this command in the folder above the notes content directory:
*  python3 -m http.server 8080

In each case the web site then be accessed using your browser at http://127.0.0.1:8080/notes/ 


## Usage

Once installed you can use either this from your browser:
*  file:///path-to-notes/   (limited version - where path-to-notes is the directory you unpacked this content)
or if you installed python successfully as shown in installation:
*  http://127.0.0.1:8080/notes/

The former would not support the yaml and other file rendering - only the 90% static content.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change. No commit/merges to main allowed except by owner.

## License

None so far. This is private at the moment. SOme content refers to other folk's web sites.
No guarantee of this content working and no liability accepted by owner - use at your own risk. 
