# mysite
My personal website.

Check the demo here: https://www.shijunshen.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

### Create a Python Virtual Environment
<code>sudo yum install python-pip python-devel gcc</code>

### Install the Components on the RHEL

<code>sudo yum install python3-pip python3-devel gcc</code>

### Setup React

<code>cd ./mysite && npm install</code>

### Setup Flask

<code>cd ./mysite/flask-api</code>

<code>python3 -m venv venv</code>

<code>source venv/bin/activate</code>

<code>pip3 install flask python-dotenv</code>

### Run website locally

React ocuppies port 3000, Flask on port 5000

<code>cd ./mysite && npm start</code>

<code>cd ./mysite && npm run start-flask</code>

## Production

For building a production environment, please refer to this https://github.com/Zephyr0402/deploy_mysite.
