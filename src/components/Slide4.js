import React from "react";

function Slide4() {
  return (
    <>
      {/* SLIDE 4 RESEARCH */}

      <div className="flex h-screen py-2">
        <div className="tag-top-left">Research</div>

        <div className="grid grid-cols-2 mt-36 mx-auto max-w-5xl space-x-12">
          {/* First card - Patents */}
          <div className="research-cards flex flex-col border-metalic-blue">
            <img
              src={require("./images/award-solid.png")}
              alt="award-solid.png"
              width="80px"
              className="self-center py-8"
            />
            <h2 className="bg-metalic-blue">Patents</h2>
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex flex-row text-[22px] space-x-4 items-start">
                <img
                  src={require("./images/circle-check-solid.png")}
                  alt="check.png"
                  width="30px"
                />
                <span>
                  System and Method for Automatically Detecting In-App Bots
                </span>
              </div>
              <div className="flex flex-row text-[22px] space-x-4 items-start">
                <img
                  src={require("./images/circle-check-solid.png")}
                  alt="check.png"
                  width="30px"
                />
                <span>
                  Reputation Scoring Internet Organizations and Autonomous
                  Systems
                </span>
              </div>
              <div className="flex flex-row text-[22px] space-x-4 items-start">
                <img
                  src={require("./images/circle-check-solid.png")}
                  alt="check.png"
                  width="30px"
                />
                <span>Chat Categorization and Agent Performance Modeling</span>
              </div>
            </div>
          </div>

          {/* Second card - Publications */}
          <div className="research-cards flex flex-col border-rus-violet">
            <img
              src={require("./images/files-icon.png")}
              alt="files-icon.png"
              width="105px"
              className="self-center py-8"
            />
            <h2 className="bg-rus-violet">Publications</h2>
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex flex-row text-[22px] space-x-4 items-start">
                <img
                  src={require("./images/circle-check-solid-violet.png")}
                  alt="circle-check-solid-violet.png"
                  width="30px"
                />
                <span>
                  Master Defect Record Retrieval Using Network-Based Feature
                  Association
                </span>
              </div>
              <div className="flex flex-row text-[22px] space-x-4 items-start">
                <img
                  src={require("./images/circle-check-solid-violet.png")}
                  alt="circle-check-solid-violet.png"
                  width="30px"
                />
                <span>
                  A New Framework of Optimizing Keyword Weights in Text
                  Categorization and Record Querying
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide4;
