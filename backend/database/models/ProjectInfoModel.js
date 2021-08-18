const databaseConn = require('../connection');

const ProjectInfo = databaseConn.model('ProjectInfo', new databaseConn.Schema({
    type: String,
    projectName: String,
    startDate: String,
    endDate: String,
    externalLink: String,
    image: String,
}));
module.exports = ProjectInfo;
