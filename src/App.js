import React from "react";
import Slide1 from "../src/components/Slide1";
import SideScroller from "./components/SideScroller";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";

function App() {
  return (
    <main className="flex flex-col container mx-auto space-y-6">
      <SideScroller />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
    </main>
  );
}

export default App;
