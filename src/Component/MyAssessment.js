import React, { useEffect, useState } from "react";

import add from "./images/add.svg";
import link from "./images/link.svg";
import calendar_today from "./images/calendar_today.svg";
import threedot from "./images/threedot.svg";
import assessment from "./images/assessment.svg";

const MyAssessment = () => {
  const [assessments, setAssessments] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const [submissionDate, setSubmissionDate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    description: "",
    skills: "",
    duration: "",
    dates: "",
  });
  const [newSkill, setNewSkill] = useState("");
  useEffect(() => {
    console.log(assessments);
  }, [assessments]);

  useEffect(() => {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    setSubmissionDate(`${day} ${month} ${year}`); // to get the submission date

    const storedAssessments = localStorage.getItem("assessments"); // to get the data from local storage
    if (storedAssessments) {
      setAssessments(JSON.parse(storedAssessments));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const addSkill = () => {
    // to add the skill
    if (newSkill.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill],
      }));
      setNewSkill("");
    }
  };
  const removeSkill = (skillToRemove) => {
    // to remover the skill
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const addAssessment = () => {
    // to saving users details
    if (formData.name.trim() !== "") {
      setAssessments([...assessments, formData]);
      setFormData({
        name: "",
        purpose: "",
        description: "",
        skills: [],
        duration: "",
      });
      localStorage.setItem(
        "assessments",
        JSON.stringify([...assessments, formData]),
      );
    }
  };
  return (
    <div className="mx-4 my-4">
      <div className="container mt-3">
        <div className="row gap-2">
          <div
            className="col-12 col-md-6 col-lg-4 rounded-3 bg-primary-subtle d-flex flex-column align-items-center justify-content-center p-3 gap-3 create_new"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => setModalOpen(true)}>
            <img
              src={add}
              alt="add"
              width="30px"
              height="30px"
              className="bg-white rounded-circle side_image"
            />
            <h6 className="fw-bolder">My Assessment</h6>
            <h6 className="text-center fs-7">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </h6>
          </div>
          {assessments?.map((obj) => (
            <div
              className="col-12 col-md-6 col-lg-4 assessment rounded-3 p-3 border"
              key={obj.name}>
              <div className=" d-flex  py-2">
                <img
                  src={assessment}
                  alt="link"
                  width="50px"
                  height="50px"
                  className="me-3"
                />
                <div className="d-flex flex-column d-md-none">
                  <h6>{obj.name}</h6>
                  <div className="d-flex gap-2">
                    <h6 className="fw-normal">{obj.purpose}</h6>
                    <img
                      src={calendar_today}
                      alt="calendar_today"
                      width="20px"
                      height="20px"
                    />
                    <h6 className="fw-light border-start border-opacity-75 ps-2">
                      {submissionDate}
                    </h6>
                  </div>
                </div>
                <img
                  src={threedot}
                  alt="threedot"
                  width="15px"
                  height="15px"
                  className="align-self-center ms-auto side_image"
                />
              </div>
              <div className="d-none d-md-flex flex-column mb-2 ">
                <h6>{obj.name}</h6>
                <div className="d-flex gap-2">
                  <h6 className="fw-normal">{obj.purpose}</h6>
                  <img
                    src={calendar_today}
                    alt="calendar_today"
                    width="20px"
                    height="20px"
                  />
                  <h6 className="fw-light border-start border-opacity-75 ps-2 fs-7">
                    {submissionDate}
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-3 pb-2  border-top">
                <div className="d-flex gap-2">
                  <div className="d-flex flex-column">
                    <h6 className="fs-7">{obj.duration}</h6>
                    <h6 className="fs-7">Duration</h6>
                  </div>
                  <div className="d-flex flex-column">
                    <h6 className="fs-7">{obj.description}</h6>
                    <h6 className="fs-7">Questions</h6>
                  </div>
                </div>
                <div className="d-flex ">
                  <button
                    className=" px-3 btn share_btn d-flex m-auto me-1
                 bg-light gap-1 align-items-center">
                    <img src={link} alt="link" width="20px" height="20px" />
                    Share
                  </button>
                  <h6 className="rounded-circle bg-primary m-auto d-flex align-items-center justify-content-center text-light">
                    H
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal starts here */}
      <div
        className={`modal fade ${isModalOpen ? "slide-up" : "slide-down"}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create new Assignment
              </h1>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Name of the Assignment
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-describedby="name"
                    placeholder="Type here"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Purpose of the test is</label>
                  <select
                    className="form-select"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    aria-label="Default select example">
                    <option>select</option>
                    <option value="Job">Job</option>
                    <option value="Internship">Intern</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Questions</label>
                  <select
                    className="form-select"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    aria-label="Default select example">
                    <option>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Skills</label>
                  {formData.skills.length !== 0 && (
                    <>
                      <div
                        className={`border d-flex gap-2 flex-wrap ${
                          formData?.skills?.length !== 0 ? "p-3" : ""
                        }`}>
                        {formData?.skills?.map((skill) => (
                          <button
                            key={skill}
                            type="button"
                            className="btn bg-primary-subtle rounded-3"
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={() => removeSkill(skill)}>
                            {skill} <span aria-hidden="true">&times;</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  <input
                    type="text"
                    className="form-control border rounded-0"
                    id="skillInput"
                    name="skills"
                    value={newSkill}
                    onChange={handleSkillChange}
                    onKeyDown={(e) => handleKeyDown(e)}
                    aria-describedby="name"
                    placeholder="Type here"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                    Duration of Assessment
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    aria-describedby="name"
                    placeholder="HH:MM:SS"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  formData.dates = setSubmissionDate;
                  if (
                    formData.name.trim() !== "" &&
                    formData.purpose !== "select" &&
                    formData.description !== "select" &&
                    formData.skills.length > 0 &&
                    formData.duration.trim() !== ""
                  ) {
                    addAssessment();
                    document.getElementById("exampleModal").click(); // Programmatically close the modal
                    setModalOpen(false);
                  } else {
                    alert("Please fill the form completely");
                  }
                }}
                style={{ width: "100%" }}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssessment;
