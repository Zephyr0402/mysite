const databaseConn = require('../connection');

const EducationInfo = databaseConn.model('EducationInfo', new databaseConn.Schema({
    type: String, // edu, work, project
    schoolName: String,
    schoolNameInitials: String,
    major: String,
    startDate: String,
    endDate: String,
    externalLink: String,
    image: String,
}));
module.exports = EducationInfo;
