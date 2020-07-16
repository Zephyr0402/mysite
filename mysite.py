from flask import Flask, request, render_template

application = Flask(__name__, static_url_path='', root_path='/home/ec2-user/mysite')


@application.route('/')
def intro():
    return render_template('index.html')


@application.route('/intro', methods=['GET'])
def jump():
    change_page = request.args.get("changePage")
    if change_page:
        return "working on it!"


@application.route('/personal-page/')
def personal_page():
    print("request get")
    return


if __name__ == '__main__':
    application.run(host='0.0.0.0', port=80, debug=False)
