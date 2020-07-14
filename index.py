from flask import Flask, request, render_template

app = Flask(__name__, static_url_path='', root_path='/home/ubuntu/flask_env/')


@app.route('/')
def intro():
    return render_template('index.html')


@app.route('/intro', methods=['GET'])
def jump():
    change_page = request.args.get("changePage")
    if change_page:
        return "working on it!"


@app.route('/personal-page/')
def personal_page():
    print("request get")
    return


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80,debug=False)
