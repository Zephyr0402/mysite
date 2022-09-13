import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import MainPage from "./components/main/MainPage";


const App = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <MainPage />
    </div>
  );
};

export default App;
