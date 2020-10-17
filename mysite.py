from flask import Flask, request, render_template

import os
flask_path = os.getcwd()

application = Flask(__name__, static_url_path='', root_path=flask_path)

@application.route('/tic-tac-toe/')
def tic_tac_toe():
    return render_template('tic-tac-toe.html')

# Going to the introduction page
@application.route('/')
def intro():
    return render_template('intro.html')

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=80, debug=True)
