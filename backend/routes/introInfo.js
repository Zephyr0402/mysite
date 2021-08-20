var express = require('express');
var router = express.Router();
const IntroInfo = require('../database/models/IntroInfoModel');
const SocialLink = require('../database/models/SocialLinkModel');

router.get("/", async function (req, res) {
    console.log('introInfo');
    try {
        const infos = await IntroInfo.find();
        res.send(infos[0]);
    } catch (e) {
        console.log(e);
    }
});

router.get("/sociallinks", async function (req, res) {
    console.log('sociallinks');
    try {
        const infos = await SocialLink.find();
        res.send(infos);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;