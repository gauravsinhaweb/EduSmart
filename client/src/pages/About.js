import React from "react";
import about from "../assets/about.svg";
import feature from "../assets/feature.png";

export function About() {
  return (
    <>
      <div className="w-full h-full">
        {" "}
        <div className="text-3xl text-white font-extralight ml-40 mt-8 mb-28">
          About <span className="text-5xl pl-4 font-light"> EduSmart🎓</span>
        </div>{" "}
        <div className="flex justify-around  mt-16 opacity-90">
          <div className="h-1/3 w-1/3 mr-12">
            {" "}
            <img src={about} alt="chatroom" />
          </div>{" "}
          <div className="h-20 w-1/3 text-white text-2xl text-justify font-light capitalize leading-relaxed">
            <p className="">
              In this pandemic situation E-learning is the new trend . from past
              year students are stuck at their homes and attended numerous
              online classes. But online classes are monotonous and concepts
              taught are not retained by our minds. Situation becomes worse when
              a subject is mostly based on practicals.
            </p>
          </div>
        </div>
        <div className=" h-full my-40 mt-64">
          <div className="">
            <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Interactive 3D Models{" "}
                </h3>
                <p class="text-md  text-gray-500 dark:text-gray-300 py-4 h-24">
                  Pariatur nulla quis aute fugiat mollit commodo officia.
                </p>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Learn with Augmented Reality{" "}
                </h3>
                <p class="text-md text-gray-500 dark:text-gray-300 py-4">
                  Voluptate dolore dolor consequat consectetur sint tempor sint
                  eiusmod consequat aliqua sint.
                </p>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4 h-24">
                  Chat with teachers and friends.{" "}
                </h3>
                <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
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
}

