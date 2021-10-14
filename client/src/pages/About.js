import React from "react";
import { AboutIcon } from "../assets/icons";
import feature from "../assets/feature.png";

const About = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="text-xl md:text-3xl text-white font-extralight text-center py-10">
          About
          <span
            className="text-2xl md:text-5xl pl-4 font-light"
            role="img"
            arial-label="EduSmart hat">
            EduSmart🎓
          </span>
        </div>
        <div className="flex justify-around lg:flex-row flex-col my-16 opacity-90">
          <div className="xl:flex-none flex-1 px-10 lg:pl-20 my-auto mx-auto">
            <AboutIcon />
          </div>
          <div className="flex-1 lg:pr-12 px-6 sm:px-12 text-white text-justify font-light capitalize leading-relaxed ">
            <p className=" lg:px-0 sm:px-12 pt-8 md:text-xl lg:text-2xl text-base">
              In this pandemic situation E-learning is the new trend . from past
              year students are stuck at their homes and attended numerous
              online classes. But online classes are monotonous and concepts
              taught are not retained by our minds. Situation becomes worse when
              a subject is mostly based on practicals.
            </p>
          </div>
        </div>
        <div className="mb-20">
          <div>
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mx-5">
              <div className=" sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800 mx-auto">
                <div className="flex-shrink-0">
                  <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Interactive 3D Models
                </h3>
                <p className="text-md  text-gray-500 dark:text-gray-300 py-4 h-24">
                  Pariatur nulla quis aute fugiat mollit commodo officia.
                </p>
              </div>
              <div className=" sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg mx-auto dark:bg-gray-800">
                <div className="flex-shrink-0">
                  <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Learn with Augmented Reality
                </h3>
                <p className="text-md text-gray-500 dark:text-gray-300 py-4">
                  Voluptate dolore dolor consequat consectetur sint tempor sint
                  eiusmod consequat aliqua sint.
                </p>
              </div>
              <div className=" sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 mx-auto">
                <div className="flex-shrink-0">
                  <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4 h-24">
                  Chat with teachers and friends.
                </h3>
                <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                  Dolore aute dolore proident sint adipisicing proident minim
                  magna laboris dolor pariatur in sunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
