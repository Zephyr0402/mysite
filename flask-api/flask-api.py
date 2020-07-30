import time
from flask import Flask, request, render_template, send_file

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/updating')
def updating():
   return render_template('updating.html');

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=False)