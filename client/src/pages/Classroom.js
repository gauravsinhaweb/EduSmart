import React from "react";
import { Link } from "react-router-dom";
import ClassRoomImg from "../assets/icons/classroom.svg";
import Card from "../components/Card";

const Classroom = () => {
  return (
    <>
      <div className="w-full mb-4">
        <div className="text-3xl text-white font-extralight mt-8 text-center">
          Classroom🎓
        </div>
        <div className="flex justify-center items-center lg:justify-around flex-col lg:flex-row mt-16">
          <Link to="medical" className="my-5 w-5/6">
            <Card title="Medical" />
          </Link>
          <Link to="aerospacePage" className="my-5 w-5/6">
            <Card title="Aerospace Engineering" />
          </Link>
          <Link to="planets" className="my-5 w-5/6 ">
            <Card title="Planets" />
          </Link>
        </div>
        <div className="flex justify-center items-center lg:justify-around lg:flex-row flex-col mt-5 lg:mt-16  opacity-90 ">
          <div className="w-5/6">
            <Card title="Coming Soon ..." />
          </div>
          <div className="opacity-60 w-5/6 text-center">
            {/* fixed image overflowing by using svg as image instead of component */}
            <img
              src={ClassRoomImg}
              alt="classroom"
              className="object-contain h-64 my-3 w-5/6 sm:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Classroom;
