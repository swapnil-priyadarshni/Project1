import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Body1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30  "
          data-aos="fade-right"
        >
          <div className="space-y-12 mr-4 mt-10 ">
            <h1 className="text-8xl font-bold">
              ISAACS - Smartheart Electronics
            </h1>
            <p className="text-2xl font-normal">
              Empowering those with Alzhimer's and Parkinson's, our products
              blend innovation with empathy, providing practical solutions for
              daily challenges
            </p>
          </div>
          <button className="btn btn-secondary my-6 mr-5 hover:bg-black hover:text-white text-xl">
            Internship
          </button>
          <button className="btn btn-secondary my-6 hover:bg-black hover:text-white text-xl">
            Training
          </button>
        </div>
        <div className="w-full order-1 md:w-1/2 mr-5" data-aos="fade-left">
          <img src="images/body1.png" className="w-90 h-95 m-15" alt="#" />{" "}
        </div>
      </div>
    </>
  );
}

export default Body1;
