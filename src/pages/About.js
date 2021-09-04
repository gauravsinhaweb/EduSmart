import React from "react";
import about from "../assets/about.svg";
import feature from "../assets/feature.png";

function About() {
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
              Nostrud aute reprehenderit ad aliqua labore irure pariatur culpa
              est aute qui nisi labore. Magna occaecat labore duis quis
              cupidatat esse id aliqua anim aute pariatur proident. Ipsum tempor
              amet proident non qui pariatur aliquip deserunt aliquip est. In
              reprehenderit amet esse deserunt excepteur nostrud aute ea
              deserunt ipsum aute incididunt enim id. Excepteur labore sunt sit
              qui mollit cupidatat laboris.
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
                  Website Design
                </h3>
                <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                  Encompassing today’s website design technology to integrated
                  and build solutions relevant to your business.
                </p>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Branding
                </h3>
                <p class="text-md text-gray-500 dark:text-gray-300 py-4">
                  Share relevant, engaging, and inspirational brand messages to
                  create a connection with your audience.
                </p>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  SEO Marketing
                </h3>
                <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                  Let us help you level up your search engine game, explore our
                  solutions for digital marketing for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
