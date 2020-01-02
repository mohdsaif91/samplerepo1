import React, { useState } from "react";
import Signupform from "./Auth/signupform";
// import "./App.css";

export default function signupPage() {
  return (
    <React.Fragment className="container" id="scrol">
      <div className="row" style={{ marginLeft: "0", height: "100%" }}>
        <div className="col-8 imgcon" id="scrol" style={{ margin: 0 }}></div>
        <div className="col-4" id="scrol">
          <Signupform />
        </div>
      </div>
    </React.Fragment>
  );
}
