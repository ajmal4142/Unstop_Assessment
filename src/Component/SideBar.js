import React, { useState } from "react";
import dashboard from "./images/dashboard.svg";
import note_alt from "./images/note_alt.svg";
import quiz from "./images/quiz.svg";
import admin_meds from "./images/admin_meds.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [activeButton, setActiveButton] = useState("my-assessment");
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "my-assessment") {
      navigate("/");
    } else {
      navigate(buttonName);
    }
  };

  return (
    <div className="box sidebar d-none d-md-flex flex-column me-3  ">
      <div className="box sidebar_top d-flex flex-column mb-5">
        <button
          type="button"
          className={`btn sidebar_btn ${
            activeButton === "dashboard" ? " btn-active" : ""
          }`}
          onClick={() => handleButtonClick("dashboard")}>
          <img src={dashboard} alt="dashboard" width="25px" height="25px" />
          <h6 className="mt-2">Dashboard</h6>
        </button>
        <button
          type="button"
          className={`btn sidebar_btn ${
            activeButton === "my-assessment" ? " btn-active" : ""
          }`}
          onClick={() => handleButtonClick("my-assessment")}>
          <img src={note_alt} alt="note_alt" width="25px" height="25px" />
          <h6 className="mt-2">Assessment</h6>
        </button>
        <button
          type="button"
          className={`btn sidebar_btn ${
            activeButton === "library" ? " btn-active" : ""
          }`}
          onClick={() => handleButtonClick("library")}>
          <img src={quiz} alt="quiz" width="25px" height="25px" />
          <h6 className="mt-2">My library</h6>
        </button>
      </div>
      <div className="box slidebar_bottom">
        <div
          className="badge text-danger rounded-5 text-wrap"
          style={{
            margin: "auto",
            border: "0.5px solid #D63500",
            display: "table",
            background: "#FBEBEA",
          }}>
          Admin
        </div>
        <button
          type="button"
          className={`btn sidebar_btn ${
            activeButton === "status" ? " btn-active" : ""
          }`}
          onClick={() => handleButtonClick("status")}
          style={{ height: "75px" }}>
          <img src={admin_meds} alt="quiz" width="25px" height="25px" />
          <h6 className="mt-2">Round status</h6>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
