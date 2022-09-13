const EducationInfo = require('./models/EducationInfoModel');
const WorkInfo = require('./models/WorkInfoModel');
const ProjectInfo = require('./models/ProjectInfoModel');
const IntroInfo = require('./models/IntroInfoModel');
const SocialLink = require('./models/SocialLinkModel');

eduInfos = [
    {
        type: "edu",
        schoolName: "University of British Columbia",
        schoolNameInitials: "UBC",
        major: "M.Eng. in Electrical & Computer Engineering",
        startDate: "Jan 2021",
        endDate: "Present",
        externalLink: "https://www.ubc.ca/",
        image: "",
    },
    {
        type: "edu",
        schoolName: "Beijing Unviersity of Technology",
        schoolNameInitials: "BJUT",
        major: "B.A. in English",
        startDate: "Feb 2018",
        endDate: "Jul 2020",
        externalLink: "https://www.bjut.edu.cn/",
        image: "",
    },
    {
        type: "edu",
        schoolName: "Beijing Unviersity of Technology",
        schoolNameInitials: "BJUT",
        major: "B.E. in Computer Science & Technology",
        startDate: "Sep 2016",
        endDate: "Jul 2020",
        externalLink: "https://www.bjut.edu.cn/",
        image: "",
    }
];

workInfos = [
    {
        type: "work",
        companyName: "Ansys",
        title: "Software Development and Testing Intern",
        startDate: "Jan 2022",
        endDate: "Dec 2022",
        externalLink: "https://www.ansys.com/",
        image: "",
    },
    {
        type: "work",
        companyName: "Computer Science at UBC",
        title: "Graduate Teaching Assistant",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        externalLink: "https://www.cs.ubc.ca/",
        image: "",
    },
    {
        type: "work",
        companyName: "WELINK",
        title: "Software Engineering Intern",
        startDate: "Aug 2020",
        endDate: "Nov 2020",
        externalLink: "http://www.pyou.com/",
        image: "",
    },
    {
        type: "work",
        companyName: "Red Hat, Inc.",
        title: "Quality Engineering Intern",
        startDate: "Jul 2019",
        endDate: "Jun 2020",
        externalLink: "https://www.redhat.com",
        image: "",
    }
];

projectInfos = [
    {
        type: "project",
        projectName: "PetPal",
        description: "A pet trading platform",
        startDate: "Jun 2021",
        endDate: "Aug 2021",
        externalLink: "https://petpal-cpsc455.herokuapp.com/",
        image: "",
    }
];

console.log("alive")

EducationInfo.create(eduInfos, (err, docs) => {
    if (!err) {
        console.log('Education information inserted successfully' + docs)
    }
});

WorkInfo.create(workInfos, (err, docs) => {
    if (!err) {
        console.log('Work information inserted successfully' + docs)
    }
});

ProjectInfo.create(projectInfos, (err, docs) => {
    if (!err) {
        console.log('Project information inserted successfully' + docs)
    }
});

IntroInfo.create({
    aboutme_line1: "Hello! My name is Shijun. I am a master student in the Department of Electrical and Computer Engineering at The University of British Columbia (UBC) in Vancouver, Canada. Before that, I studied at the Beijing University of Technology, majoring in Computer Science and Technology.",
    aboutme_line2: "My research interest is broadly in the cloud area. In my senior year as an undergrad, I worked on virtualization technology and cloud in the Libvirt QE group at Red Hat Inc, Beijing R&D branch.",
    aboutme_line3: "In my spare time, I love gaming and traveling.",
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