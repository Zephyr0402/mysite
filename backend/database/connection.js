var mongoose = require('mongoose');

const configs = {
    URL: '127.0.0.1:27017',
    Name: 'mysite',
}

// mongoose.connect('mongodb://' + configs.URL + '/' + configs.Name);
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.mqqpv.mongodb.net/mysite');

module.exports = mongoose;
