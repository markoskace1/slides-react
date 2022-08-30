import React from "react";

function Slide7() {
  return (
    <>
      {/* SLIDE 7 */}
      <div className="relative h-screen grid grid-rows-5 py-2">
        {/* Left section */}
        <div className="flex flex-col space-y-10 mt-14">
          <div className="flex flex-row items-center space-x-8">
            <img
              src={require("./images/slide-7-pic1.png")}
              alt="slide-7-pic1.png"
              className="rounded-xl shadow-lg w-[500px] shadow-gray-700"
            />
            <p className="text-2xl">
              Panelist at the inauguration <br />
              of Nilekani Center, AI4Bharat, <br />
              IIT Madras (July 2022)
            </p>
          </div>

          <div className="flex flex-row items-center space-x-8">
            <img
              src={require("./images/slide-7-pic2.png")}
              alt="slide-7-pic2.png"
              className="rounded-xl shadow-lg w-[500px] shadow-gray-700"
            />
            <p className="text-2xl">
              Seminar at MSRIT, <br />
              Bengaluru on AIML - The Electricity of the Future <br /> (June,
              2022)
            </p>
          </div>

          <div className="flex flex-row items-center space-x-8">
            <img
              src={require("./images/slide-7-pic3.png")}
              alt="slide-7-pic3.png"
              className="rounded-xl shadow-lg w-[500px] shadow-gray-700"
            />
            <p className="text-2xl">
              Panelist at the inauguration <br />
              of Nilekani Center, AI4Bharat, <br />
              IIT Madras (July 2022)
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="absolute top-0 right-0">
          <img src={require("./images/waves.png")} alt="waves.png" />
        </div>
        <div className="absolute flex flex-col top-20 right-16 text-center space-y-3">
          <p className="text-2xl font-bold text-aqua-md">
            Inspire your students with a <br /> seminar on AIML from a Global{" "}
            <br /> AIML Leader.
          </p>
          <p className="text-2xl italic text-white ">Reach out to Harsh</p>
          <p className="text-2xl font-bold text-aqua-md">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/harshsinghal/"
            className="text-xl underline text-steel-blue-link"
          >
            https://www.linkedin.com/in/harshsinghal/
          </a>
          <p className="text-2xl font-bold text-aqua-md">Whatsapp</p>
          <p className="text-2xl text-white ">+91 8660096150</p>
        </div>
      </div>
    </>
  );
}

export default Slide7;
