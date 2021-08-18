const EducationInfo = require('./models/EducationInfoModel');
const WorkInfo = require('./models/WorkInfoModel');
const ProjectInfo = require('./models/ProjectInfoModel');

EducationInfo.create({
    type: "edu",
    schoolName: "Beijing Unviersity of Technology",
    schoolNameInitials: "BJUT",
    major: "B.A. in English",
    startDate: "Feb 2018",
    endDate: "Jul 2020",
    externalLink: "https://www.bjut.edu.cn/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

EducationInfo.create({
    type: "edu",
    schoolName: "Beijing Unviersity of Technology",
    schoolNameInitials: "BJUT",
    major: "B.E. in Computer Science & Technology",
    startDate: "Sep 2016",
    endDate: "Jul 2020",
    externalLink: "https://www.bjut.edu.cn/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

EducationInfo.create({
    type: "edu",
    schoolName: "University of British Columbia",
    schoolNameInitials: "UBC",
    major: "M.Eng. in Electrical & Computer Engineering",
    startDate: "Jan 2021",
    endDate: "Present",
    externalLink: "https://www.ubc.ca/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

WorkInfo.create({
    type: "work",
    companyName: "New Oriental Education & Technology Group, Inc.",
    title: "Teaching Assistant",
    startDate: "Sep 2016",
    endDate: "Jan 2017",
    externalLink: "http://www.neworiental.org/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

WorkInfo.create({
    type: "work",
    companyName: "Red Hat, Inc.",
    title: "Quality Engineering Intern",
    startDate: "Jul 2019",
    endDate: "Jun 2020",
    externalLink: "https://www.redhat.com",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

ProjectInfo.create({
    type: "project",
    projectName: "PetPal",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    externalLink: "https://petpal-cpsc455.herokuapp.com/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});