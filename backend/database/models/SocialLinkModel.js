const databaseConn = require('../connection');

const SocialLink = databaseConn.model('SocialLink', new databaseConn.Schema({
    name: String,
    url: String,
    className: String,
}));
module.exports = SocialLink;
