import React from "react";

function Slide1() {
  return (
    <>
      {/* SLIDE 1 HIGHLIGHTS */}
      <div id="slide-1" className="h-screen grid grid-cols-8 py-2">
        <div className="tag-top-left">Highlights</div>

        {/* Left section - Image */}
        <div className="flex col-span-3">
          <img
            src={require("./images/slide-1-pic.png")}
            alt="slide-1-pic.png"
          />
        </div>

        {/* Right section */}
        <div className="flex flex-col col-span-5 justify-center pl-20">
          <h1 className="heading text-7xl uppercase text-center">
            Harsh Singhal
          </h1>
          <div className="flex my-8 items-center space-x-10">
            <img
              src={require("./images/rutgers-logo.png")}
              alt="rutgers-logo.png"
              width="300px"
              className="border-2 border-[#c8c8c8] rounded-xl p-3"
            />
            <p>
              Graduated{" "}
              <span className="font-bold">Rutgers University, New Jersey</span>{" "}
              2008 with{" "}
              <span className="font-bold">MS in Systems Engineering</span>
            </p>
          </div>

          {/* Bullet points with icons */}
          <div className="flex flex-row items-center space-x-6 mb-7">
            <div>
              <svg
                className="icons"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <div>
              <p>
                Developed high-impact solutions using AI & ML in{" "}
                <span className="font-bold">
                  Francisco Bay Area, California
                </span>
                for more than a decade
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-6 mb-7">
            <div>
              <svg
                className="icons"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <div>
              <p>
                Held <span className="font-bold">Senior Data Scientist</span>{" "}
                positions at <span className="font-bold">LinkedIn</span> and{" "}
                <span className="font-bold">Netflix</span>
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-6 mb-7">
            <div>
              <svg
                className="icons"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <div>
              <p>
                Published{" "}
                <span className="font-bold">3+ international patents</span> on
                using <span className="font-bold">AIML</span> to solve business
                problems
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-6 mb-7">
            <div>
              <svg
                className="icons"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <div>
              <p>
                <span className="font-bold">
                  Head of Machine Learning @ Koo
                </span>
                , Indias #1 social media app
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-6 mb-7">
            <div>
              <svg
                className="icons"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <div>
              <p>
                More than a decade of experience{" "}
                <span className="font-bold">building AIML solutions</span> at
                top
                <span className="font-bold">Internet</span> companies
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between self-end w-[860px] font-bold mt-2 px-14 py-4 rounded-full text-white bg-rus-violet">
            <p>Startup advisor</p>
            <span className="w-[2px] bg-white"></span>
            <p>Public speaker</p>
            <span className="w-[2px] bg-white"></span>
            <p>Global AIML leader</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide1;
