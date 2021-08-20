import React, {useState, useEffect} from 'react';
// Import Component
import Footer from "../Footer";
import Header from "../Header";
import Highlight from "./Highlight";
import Intro from "./Intro";
import CardView from "./CardView";

// Import Data
import resumeData from "../../data/resumeData";

import { getEducationInfo_Card } from '../../services/eduInfo';
import { getWorkInfo_Card } from '../../services/workInfo';
import { getProjectInfo_Card } from '../../services/projectInfo';

const MainPage = (props) => {
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
    }, []);

    return (
        <div>
            <Header />
            <Highlight />
            <Intro resumeData={resumeData} />
            <br />
            <CardView cardInfos={eduCardInfos} cardViewTitle={"Education"}></CardView>
            <br />
            <CardView cardInfos={workCardInfos} cardViewTitle={"Work Experience"}></CardView>
            <br />
            <CardView cardInfos={projectCardInfos} cardViewTitle={"Project"}></CardView>
            <br />
            <Footer resumeData={resumeData} />
        </div>
    );

}

export default MainPage;