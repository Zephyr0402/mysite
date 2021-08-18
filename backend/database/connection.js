var mongoose = require('mongoose');

const configs = {
    URL: '127.0.0.1:27017',
    Name: 'mysite',
}

mongoose.connect('mongodb://' + configs.URL + '/' + configs.Name);

module.exports = mongoose;
