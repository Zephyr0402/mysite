var express = require('express');
var router = express.Router();
const WorkInfo = require('../database/models/WorkInfoModel');

router.get("/cardInfo", async function (req, res) {
    console.log('workinfo');
    try {
        const infos = await WorkInfo.find();
        var cardInfos = [];
        for (let i = 0; i < infos.length; i++) {
            const newEntry = {
                "name": infos[i].companyName,
                "description": infos[i].title,
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