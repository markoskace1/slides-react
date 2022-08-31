import React from "react";

function Slide2() {
  return (
    <>
      {/* SLIDE 2 INDUSTRY */}
      <div id="slide-2" className="relative grid grid-rows-1 h-screen py-2">
        <div className="tag-top-left mt-2">Industry</div>

        {/* Heading */}
        <div className="flex bg-ai-bg items-end font-bold w-full bg-cover bg-right text-white">
          <h1 className="px-10 py-5 text-[40px] bg-[#26556B] bg-opacity-50">
            Harsh Singhal is a seasoned AI Executive with extensive experience
            across industries and business problems
          </h1>
        </div>

        {/* Table */}
        <div className="relative grid grid-cols-8 grid-flow-row auto-rows-max gap-5 mt-10 mb-24">
          <div className="t-head col-start-3 col-span-full font-bold border-b-2 border-rus-violet text-rus-violet">
            DSML solution engineering
          </div>
          <div className="t-head col-start-3 col-span-2 border-b-2 border-rus-violet">
            Technology stack
          </div>
          <div className="t-head col-start-5 col-span-2 border-b-2 border-rus-violet">
            Techniques
          </div>
          <div className="t-head col-start-7 col-span-2 border-b-2 border-rus-violet">
            Products
          </div>

          <div className="violet-divs flex items-center col-start-1 row-start-3 row-span-2 bg-rus-violet">
            Domain knowledge
          </div>
          <div className="violet-divs flex items-center col-start-2 row-start-3 row-span-1 bg-rus-violet">
            Executive
          </div>

          <div className="violet-divs flex items-center col-start-2 row-start-4 row-span-1 bg-rus-violet">
            Technologist
          </div>

          <div className="t-data col-start-3 row-start-3 col-span-2 row-span-1">
            Lead cross-functional teams (AI/ML, Data Engineering, ML Ops, Data
            Labeling)
          </div>
          <div className="t-data col-start-5 row-start-3 col-span-2 row-span-1">
            Content classNameification, multilingual NLP, recommendations,
            personalization
          </div>
          <div className="t-data col-start-7 row-start-3 col-span-2 row-span-1">
            News Feed, Recommended For You, Topics, Trending, Bot-detection,
            anti-Spam
          </div>

          <div className="t-data col-start-3 row-start-4 col-span-2 row-span-1">
            Spark, Ludwig, Keras, BentoML, Sagemaker, GraphX, MLLib,
            Scikit-Learn, ONNX, AWS/GCP stack
          </div>
          <div className="t-data col-start-5 row-start-4 col-span-2 row-span-1">
            NLP (multilingual embeddings, LLMs), Collab Filtering, ALS, Link
            Prediction, Graph Embeddings
          </div>
          <div className="t-data col-start-7 row-start-4 col-span-2 row-span-1">
            Ideation, roadmap, sprint planning, algorithm development, ML Ops,
            deployment and continuous improvement
          </div>

          {/* Dotted seperator line */}
          <div className="absolute top-[193px] w-full -z-10">
            <hr className="border border-black border-dashed" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide2;
