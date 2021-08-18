import React, {useState, useEffect} from 'react';
// Import Component
import Footer from "../Footer";
import Resume from "./Resume";
import Header from "../Header";
import Highlight from "./Highlight";
import Intro from "./Intro";
import CardView from "./CardView";

// Import Data
import jobData from "../../data/resume/job";
import projectData from "../../data/resume/proj";
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
            console.log("hello", res);
            seteduCardInfos(res);
        });
        getWorkInfo_Card().then(res => {
            console.log("hello", res);
            setworkCardInfos(res);
        });
        getProjectInfo_Card().then(res => {
            console.log("hello", res);
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