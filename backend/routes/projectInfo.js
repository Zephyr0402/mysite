var express = require('express');
var router = express.Router();
const ProjectInfoModel = require('../database/models/ProjectInfoModel');

router.get("/cardInfo", async function (req, res) {
    console.log('projectinfo');
    try {
        const infos = await ProjectInfoModel.find();
        var cardInfos = [];
        for (let i = 0; i < infos.length; i++) {
            const newEntry = {
                "name": infos[i].projectName,
                "description": "",
                "startDate": infos[i].startDate,
                "endDate": infos[i].endDate,
                "image": infos[i].image,
                "link": infos[i].externalLink,
            };
            cardInfos.push(newEntry);
        }
        res.send(cardInfos);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;