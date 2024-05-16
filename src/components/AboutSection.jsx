import React from "react";
import AboutImg from "../assets/images/profile-pic-4.png";
import ViewMyWorkBtn from "./ViewMyWorkBtn";
function AboutSection() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-ceneter">
            <img
              className="img-fluid w-100 shadow rounded"
              src={AboutImg}
              alt="about img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">About me</h2>
            <p className="text-start">
              As a nearly graduated frontend developer pursuing a Higher
              Professional Degree, I am enthusiastic about translating creative
              concepts into user-friendly web interfaces. My education has
              equipped me with essential skills in design processes, interaction
              design, and programming.
            </p>
            <p className="text-start mb-5">
              Eager to apply my creative design principles, HTML/CSS
              proficiency, and foundational knowledge of JavaScript to
              contribute to innovative projects and enhance user experiences.
            </p>
            <ViewMyWorkBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
