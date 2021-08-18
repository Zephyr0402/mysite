var express = require('express');
var router = express.Router();
const EducationInfo = require('../database/models/EducationInfoModel');

router.get("/cardInfo", async function (req, res) {
    console.log('eduInfo');
    try {
        const infos = await EducationInfo.find();
        var cardInfos = [];
        for (let i = 0; i < infos.length; i++) {
            const newEntry = {
                "name": infos[i].schoolName,
                "description": infos[i].major,
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