import React from "react";
import { Link } from "react-scroll/modules";

function SideScroller() {
  return (
    <div className="fixed left-20 top-1/3 z-10">
      <div className="flex flex-col w-8 items-center py-2 rounded-full space-y-3 shadow-lg border border-metalic-blue">
        <Link
          activeClass="bg-metalic-blue"
          to="slide-1"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
        <Link
          activeClass="bg-metalic-blue"
          to="slide-2"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
        <Link
          activeClass="bg-metalic-blue"
          to="slide-3"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
        <Link
          activeClass="bg-metalic-blue"
          to="slide-4"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
        <Link
          activeClass="bg-metalic-blue"
          to="slide-5"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
        <Link
          activeClass="bg-metalic-blue"
          to="slide-6"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
        <Link
          activeClass="bg-metalic-blue"
          to="slide-7"
          spy={true}
          smooth={true}
          duration={250}
          className="w-5 h-5 rounded-full cursor-pointer border border-metalic-blue"
        />
      </div>
    </div>
  );
}

export default SideScroller;
