from flask import Flask
app = Flask(__name__)

@app.route('/index')
def hello_geek():
    return '''<h2>Hello from </h1>
    <a href="index.html">Index is here</a>
    '''

if __name__ == "__main__":
    app.run(debug=True)


@app.route('/docker')
def hello_docker():
  return '<h2>Hello from Docker</h2>\n'