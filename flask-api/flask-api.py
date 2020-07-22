import time
from flask import Flask, request, render_template

import os
flask_path = os.getcwd()

app = Flask(__name__, static_url_path='', root_path=flask_path)
