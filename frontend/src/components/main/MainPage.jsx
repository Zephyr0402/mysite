import React, {useState, useEffect} from 'react';
// Import Component
import Footer from "../Footer";
import Header from "../Header";
import Highlight from "./Highlight";
import Intro from "./Intro";
import CardView from "./CardView";

import { getEducationInfo_Card } from '../../services/eduInfo';
import { getWorkInfo_Card } from '../../services/workInfo';
import { getProjectInfo_Card } from '../../services/projectInfo';
import { getIntroInfo, getSocialLinks } from '../../services/introInfo';

const MainPage = (props) => {
    const [introInfo, setIntroInfo] = useState(null);
    const [socialLinks, setSocialLinks] = useState([]);
    const [eduCardInfos, seteduCardInfos] = useState([]);
    const [workCardInfos, setworkCardInfos] = useState([]);
    const [projectCardInfos, setProjectCardInfos] = useState([]);
    
    useEffect(() => {
        console.log('MainPage');
        getEducationInfo_Card().then(res => {
            seteduCardInfos(res);
        });
        getWorkInfo_Card().then(res => {
            setworkCardInfos(res);
        });
        getProjectInfo_Card().then(res => {
            setProjectCardInfos(res);
        });
        getIntroInfo().then(res => {
            setIntroInfo(res);
        });
        getSocialLinks().then(res => {
            setSocialLinks(res);
        })
    }, []);

    return (
        <div>
            <Header />
            {/* <Highlight /> */}
            <Intro introInfo={introInfo} />
            <br />
            <CardView cardInfos={eduCardInfos} cardViewTitle={"Education"}></CardView>
            <br />
            <CardView cardInfos={workCardInfos} cardViewTitle={"Work Experience"}></CardView>
            <br />
            <CardView cardInfos={projectCardInfos} cardViewTitle={"Project"}></CardView>
            <br />
            <Footer socialLinks={socialLinks} />
        </div>
    );

}

export default MainPage;