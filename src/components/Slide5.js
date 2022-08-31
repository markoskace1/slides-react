import React from "react";

function Slide5() {
  return (
    <>
      {/* SLIDE 5 CONTRIBUTION */}
      <div id="slide-5" className="h-screen grid grid-cols-8 py-2">
        <div className="tag-top-left text-2xl w-[575px]">
          Contribution to student community
        </div>

        {/* Left section - Image */}
        <div className="flex col-span-3">
          <img
            src={require("./images/slide-5-pic.png")}
            alt="slide-5-pic.png"
          />
        </div>

        {/* Right section - Bullet points */}
        <div className="flex flex-col col-span-5 justify-center pl-20">
          <h1 className="heading mb-4">AIML College Seminars</h1>
          <h2>60 - 90 minutes | Live or Remote</h2>
          <div className="flex flex-col mt-14 space-y-8">
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>
                Evolution of Internet technologies from spreadsheets, to
                databases and current state of AIML
              </span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>What is AIML - Data, Patterns and Story</span>
            </div>
            <div className="flex flex-col">
              <div className="bullet-points">
                <img
                  src={require("./images/circle-check-solid-violet.png")}
                  alt="circle-check-solid-violet.png"
                  width="30px"
                />
                <span>How to practically learn AIML</span>
              </div>
              <div className="flex flex-row text-2xl mt-2 pl-[72px]">
                <ul className="list-disc space-y-2">
                  <li>Datasets</li>
                  <li>Industrial applications</li>
                  <li>Data-driven product development</li>
                </ul>
              </div>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>
                How can students start developing skills in AIML from Day 1
              </span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>How to keep learning?</span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>Job Opportunities in AIML industry</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide5;
