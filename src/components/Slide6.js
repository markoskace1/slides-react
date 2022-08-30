import React from "react";

function Slide6() {
  return (
    <>
      {/* SLIDE 6 */}
      <div className="h-screen grid grid-rows-5 py-2">
        <div className="tag-top-left text-2xl w-[575px]">
          Contribution to student community
        </div>

        {/* Top section - Image */}
        <div className="row-span-2">
          <img
            src={require("./images/slide-6-pic.png")}
            alt="slide-6-pic.png"
          />
        </div>

        {/* Lower section - bullet points */}
        <div className="grid grid-cols-9 items-center space-x-12">
          <div className="flex flex-col col-span-4 space-y-6">
            <h1 className="heading">AIML College Working Sessions</h1>
            <h2>3 hrs | Live College Computer Lab</h2>
          </div>

          <div className="flex flex-col col-span-5 mt-20 space-y-6">
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>Introduction to fundamental skills in AIML</span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>
                Overview of Python - #1 programming language needed for AIML
              </span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>
                Overview of Pandas - the most popular Data Analysis technology
              </span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>Overview of Analytics</span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>
                Overview of Scikit-learn - the #1 ML library in the world
              </span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>Overview of Deep Learning</span>
            </div>
            <div className="bullet-points">
              <img
                src={require("./images/circle-check-solid-violet.png")}
                alt="circle-check-solid-violet.png"
                width="30px"
              />
              <span>
                Complete plan to organize students into groups to build
                end-to-end data product
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide6;
