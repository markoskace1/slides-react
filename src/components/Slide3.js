import React from "react";

function Slide3() {
  return (
    <>
      {/* SLIDE 3 CAREER */}

      <div id="slide-3" className="flex flex-col h-screen py-2">
        <div className="tag-top-left">Career</div>

        {/* Cards */}
        <div className="flex flex-row justify-between mt-32 px-8 space-x-4">
          <div className="career-cards flex flex-col border-2 rounded-xl border-metalic-blue">
            <div className="flex justify-center py-3">
              <img
                src={require("./images/mu-sigma-logo.png")}
                alt="mu-sigma-logo.png"
                width="80px"
              />
            </div>
            <div className="py-4 bg-metalic-blue">
              <h3>24/7.ai</h3>
              <h3>Bengaluru</h3>
            </div>
            <div className="pl-6 py-3">
              <ul>
                <li>
                  Developed Text Mining solution to increase agent productivity
                </li>
                <li>Industry application presented at KDD</li>
                <li>
                  Granted patent based on my work in applying Text Mining for
                  chat categorization
                </li>
              </ul>
            </div>
          </div>

          <div className="career-cards flex flex-col border-2 rounded-xl border-rus-violet">
            <div className="flex justify-center py-9">
              <img
                src={require("./images/247ai-logo.png")}
                alt="247ai-logo.png"
                width="144px"
              />
            </div>
            <div className="py-4 bg-rus-violet">
              <h3>24/7.ai</h3>
              <h3>Bengaluru</h3>
            </div>
            <div className="pl-6 pt-4">
              <ul>
                <li>
                  Developed Text Mining solution to increase agent productivity
                </li>
                <li>Industry application presented at KDD</li>
                <li>
                  Granted patent based on my work in applying Text Mining for
                  chat categorization
                </li>
              </ul>
            </div>
          </div>

          <div className="career-cards flex flex-col border-2 rounded-xl border-[#141E5A]">
            <div className="flex justify-center py-5">
              <img
                src={require("./images/linkedin-logo.png")}
                alt="linkedin-logo.png"
                width="70px"
              />
            </div>
            <div className="py-4 bg-[#141E5A]">
              <h3>LinkedIn</h3>
              <h3>California</h3>
            </div>
            <div className="pl-6 pt-4">
              <ul>
                <li>
                  Developed Bot detection and cybersecurity AI solutions to
                  protect millions of profiles
                </li>
                <li>
                  Cross-functional role to develop comprehensive DSML solutions
                </li>
                <li>My contributions led to patent applications</li>
              </ul>
            </div>
          </div>

          <div className="career-cards flex flex-col border-2 rounded-xl border-gold-yellow">
            <div className="flex justify-center py-9">
              <img
                src={require("./images/netflix-logo.png")}
                alt="netflix-logo.png"
                width="140px"
              />
            </div>
            <div className="py-4 bg-gold-yellow">
              <h3>Netflix</h3>
              <h3>California</h3>
            </div>
            <div className="pl-6 pt-4">
              <ul>
                <li>
                  Developed Account Take Over (ATO) DSML solutions to protect
                  millions of subscribers
                </li>
                <li>
                  Cross-functional role to develop comprehensive DSML solutions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Koo Section */}
        <div className="koo flex flex-row items-center mt-6 py-8 px-10 bg-[#E5E4E4]">
          <div>
            <img
              src={require("./images/koo-logo.png")}
              alt="koo-logo.png"
              width="90px"
            />
          </div>
          <div className="flex flex-col pl-2 space-y-3 text-center">
            <h3>Head of ML</h3>
            <h3>Koo | Bengaluru</h3>
          </div>

          <div className="h-32 border-l-2 mx-10 border-black"></div>

          <div>
            <ul>
              <li>Lead a team of 20+ DS/ML engineers at Koo</li>
              <li>
                Developed innovative products in Indian Language NLP in 10+
                languages
              </li>
              <li>
                Developed Recommended For You - Industry leading recommendations
                engine on a diverse social graph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide3;
