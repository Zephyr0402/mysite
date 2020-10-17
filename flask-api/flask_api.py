import time
from flask import Flask, request, render_template, send_file

application = Flask(__name__, static_folder='../build', static_url_path='/')

@application.route('/updating')
def updating():
   return render_template('updating.html');

@application.route('/')
def index():
    return application.send_static_file('index.html')

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=80, debug=False)
