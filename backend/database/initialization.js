const EducationInfo = require('./models/EducationInfoModel');
const WorkInfo = require('./models/WorkInfoModel');
const ProjectInfo = require('./models/ProjectInfoModel');
const IntroInfo = require('./models/IntroInfoModel');
const SocialLink = require('./models/SocialLinkModel');

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

WorkInfo.create({
    type: "work",
    companyName: "WELINK",
    title: "Software Engineer Intern",
    startDate: "Aug 2020",
    endDate: "Nov 2020",
    externalLink: "http://www.pyou.com/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

ProjectInfo.create({
    type: "project",
    projectName: "PetPal",
    description: "A pet trading platform",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    externalLink: "https://petpal-cpsc455.herokuapp.com/",
    image: "",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

IntroInfo.create({
    aboutme_line1: "I am a MENG student in the Department of Electrical and Computer Engineering at The University of British Columbia (UBC) in Vancouver, Canada. Before that, I studied at the Beijing University of Technology, majoring in Computer Science and Technology.",
    aboutme_line2: "My research interest is broadly in the system area. In my senior year as an undergrad, I worked on virtualization technology and cloud in the Libvirt QE group at Red Hat Inc, Beijing R&D branch.",
    aboutme_line3: "In my spare time, I love gaming. Recently I have been playing Zelda: Breath of the Wild on the Switch console and looking forward to the formal release of Subnautica: Below Zero.",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

SocialLink.create({
    name: "email",
    url: "mailto:shijun20@student.ubc.ca",
    className: "fa fa-envelope",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

SocialLink.create({
    name: "linkedin",
    url: "https://www.linkedin.com/in/shijun-shen/",
    className: "fa fa-linkedin",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});

SocialLink.create({
    name: "github",
    url: "http://github.com/Zephyr0402",
    className: "fa fa-github",
}, (err, docs) => {
    if (!err) {
        console.log('Inserted successfully' + docs)
    }
});