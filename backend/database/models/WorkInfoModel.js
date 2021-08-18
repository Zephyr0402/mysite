const databaseConn = require('../connection');

const WorkInfo = databaseConn.model('WorkInfo', new databaseConn.Schema({
    type: String,
    companyName: String,
    title: String,
    startDate: String,
    endDate: String,
    externalLink: String,
    image: String,
}));
module.exports = WorkInfo;
