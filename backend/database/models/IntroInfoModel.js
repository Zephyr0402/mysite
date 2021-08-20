const databaseConn = require('../connection');

const IntroInfo = databaseConn.model('IntroInfo', new databaseConn.Schema({
    aboutme_line1: String,
    aboutme_line2: String,
    aboutme_line3: String,
}));
module.exports = IntroInfo;
