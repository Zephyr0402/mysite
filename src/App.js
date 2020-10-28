import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar,
  showBlog,
} from "./data/info.json";

// Import Component
import CoverPage from "./components/main/CoverPage";
import Footer from "./components/Footer";
import Resume from "./components/main/Resume";
import Header from "./components/Header";
import Highlight from "./components/main/Highlight";
import Intro from "./components/main/Intro";

// Import Data
import eduData from "./data/resume/edu";
import jobData from "./data/resume/job";
import projectData from "./data/resume/proj";
import resumeData from "./data/resumeData";


const App = () => {
  return (
    <div>
      <Header />
      <Highlight />
      <Intro resumeData={resumeData}/>
      <br />
      <Resume resumeData={eduData} />
      <br />
      <Resume resumeData={jobData} />
      <br />
      <Resume resumeData={projectData} />
      <br />
      <Footer resumeData={resumeData}/>
    </div>
  );
};

export default App;
