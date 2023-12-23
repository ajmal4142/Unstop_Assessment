import React, { useEffect, useState } from "react";
import view_agenda from "./images/view_agenda.svg";
import search from "./images/search.svg";
import filter_list_alt from "./images/filter_list_alt.svg";
import bar_chart from "./images/bar_chart.svg";
import Frame_1 from "./images/Frame_1.svg";
import Frame_2 from "./images/Frame_2.svg";
import Frame_3 from "./images/Frame_3.svg";
import MyAssessment from "./MyAssessment";
import Header from "./Header";

const MainSection = () => {
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [assessments, setAssessments] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log(assessments);
  }, [assessments]);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth > 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = () => {
    const storedAssessments = localStorage.getItem("assessments"); // to get the data from local storage
    if (storedAssessments) {
      // setAssessments(JSON.parse(storedAssessments));
      const loaclArr = JSON.parse(storedAssessments).filter((obj) =>
        obj.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setAssessments(loaclArr);
    }
    if (assessments.length === 0) {
      alert("Search not found");
    } else {
      alert(
        `It's for ${assessments[0].purpose} and the duration will be ${assessments[0].duration}`,
      );
    }
  };
  return (
    <div className="box main_section ">
      <Header />
      <div className={`box flex-column m-4 ${show ? "d-flex" : "d-none"}`}>
        <h6 className="fw-bolder">Assessments Overview</h6>
        <div className="row m-1">
          {/* first col */}
          <div className="col-6 col-md-3 col-xl-2 order-1 order-md-1 order-xl-1   border rounded-start-4 rounded-md-2 py-3 pl-4 ">
            <h6>Total Assessment</h6>
            <div className="d-flex gap-2  align-items-center mt-3 ">
              <img
                src={view_agenda}
                alt="Frame_1"
                width="20px"
                height="20px"
                className="p-2 rounded-2"
              />
              <h5 className="fw-bold">34</h5>
            </div>
          </div>
          {/* Second col */}
          <div className="col-12 col-md-6 col-xl-3 order-3 order-md-2 order-xl-2  border py-3 pl-4">
            <h6>Candidates</h6>

            <div className="row mt-3">
              <img
                src={Frame_1}
                alt="Frame_2"
                width="40px"
                height="40px"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="col ">
                <div className="row d-flex align-items-center">
                  <h5 className="fw-bold w-auto pe-0">111</h5>
                  <h6 className=" text-success fs-7 text-wrap fs-md-6 w-auto ps-0">
                    +89
                  </h6>
                </div>
                <h6 className="fs-7 text-nowrapp">Total Candidate</h6>
              </div>

              <div className="col  border-start  border-opacity-75">
                <div className="row d-flex align-items-center ">
                  <h5 className="fw-bold w-auto pe-0">114</h5>
                  <h6 className=" text-success fs-7 text-wrap fs-md-6 w-auto ps-0">
                    +89
                  </h6>
                </div>
                <h6 className="fs-7 text-nowrapp">Who Attempted</h6>
              </div>
            </div>
          </div>
          {/* Third col */}
          <div className="col-12 col-md-12 col-xl-5 order-4 order-xl-3 border py-3 pl-4 pe-2">
            <h6>Candidates Source</h6>
            <div className="row mt-3 d-flex">
              <img
                src={Frame_2}
                alt="Frame_2"
                width="40px"
                height="40px"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="col">
                <span className="row d-flex align-items-center">
                  <h5 className="fw-bold w-auto pe-0">111</h5>
                  <h6 className=" text-success fs-7 text-wrap fs-md-6 w-auto ps-0">
                    +89
                  </h6>
                </span>
                <h6 className="fs-7">Email</h6>
              </div>

              <div className="col border-start  border-opacity-50">
                <div className="row d-flex align-items-center ">
                  <h5 className="fw-bold w-auto pe-0">145</h5>
                  <h6 className=" text-success fs-7 text-wrap fs-md-6 w-auto ps-0">
                    +89
                  </h6>
                </div>
                <h6 className="fs-7 text-nowrapp">Social Share</h6>
              </div>
              <div className="col border-start  border-opacity-50">
                <div className="row d-flex align-items-center ">
                  <h5 className="fw-bold w-auto pe-0">145</h5>
                  <h6 className=" text-success fs-7 text-wrap fs-md-6 w-auto ps-0">
                    +89
                  </h6>
                </div>
                <h6 className="fs-7 text-nowrapp">Unique Link</h6>
              </div>
            </div>
          </div>
          {/* fourth col */}
          <div className=" col-6 col-md-3 col-xl-2 order-2 order-md-3 order-xl-4 border rounded-end-4 py-3 pl-4 pe-2">
            <h6> Total Purpose</h6>
            <div className="d-flex gap-2 align-items-center mt-3">
              <img src={Frame_3} alt="Frame_1" width="40px" height="40px" />
              <h5 className="fw-bold">34</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Assessments Overview section is over */}
      <div className="d-flex justify-content-between mx-4 my-4">
        <h6 className="fw-bolder">My Assessment</h6>
        <div className="d-flex d-md-none gap-2">
          <img
            src={search}
            alt="search"
            className="side_image"
            onClick={() => setShowInput(!showInput)}
          />
          <img
            src={filter_list_alt}
            alt="filter_list_alt"
            className="side_image"
          />
          <img
            src={bar_chart}
            alt="bar_chart"
            className="side_image"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {showInput && (
        <div className="input-group px-4 py-0">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            aria-label="Username"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="input-group-text side_image" onClick={handleSearch}>
            <img src={search} alt="search" />
          </span>
        </div>
      )}
      <MyAssessment />
    </div>
  );
};

export default MainSection;
