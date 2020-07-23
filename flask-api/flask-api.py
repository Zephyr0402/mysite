import time
from flask import Flask, request, render_template, send_file

import os
flask_path = os.getcwd()

app = Flask(__name__, static_url_path='', root_path=flask_path)

@app.route('/updating')
def updating():
   return render_template('updating.html');