import React from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
} from "../../data/info.json";

const CoverPage = (props) => {
  return (
    <div>
      <div id="coverpage" className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <div className="container container-fluid text-center ">
          <h1 className="display-1">
            {FirstName + " " + MiddleName + " " + LastName}
          </h1>
          <Typist className="lead">{devDesc}</Typist>
          <div className="p-5">
            <a className="btn btn-outline-light btn-lg" href="#aboutme" role="button" aria-label="Learn more about me">More about me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
