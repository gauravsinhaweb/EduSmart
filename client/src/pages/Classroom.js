import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { ClassRoomIcon } from "../assets/icons";
import ClassRoomImg from "../assets/icons/classroom.svg";
export function Classroom() {
  return (
    <>
      <div className="w-full mb-4">
        <div className="text-3xl text-white font-extralight mt-8 text-center">
          Classroom🎓
        </div>
        <div className="flex justify-center items-center lg:justify-around flex-col lg:flex-row mt-16">
          <Link to="medical" className="my-5">
            <Card title="Medical" />
          </Link>
          <Link to="aerospacePage" className="my-5">
            <Card title="Aerospace Engineering" />
          </Link>
          <Link to="planets" className="my-5">
            <Card title="Planets" />
          </Link>
        </div>
        <div className="flex justify-center items-center lg:justify-around lg:flex-row flex-col mt-5 lg:mt-16  opacity-90">
          <Card title="Coming Soon ..." />
          <div className="opacity-60">
            {/* fixed image overflowing by using svg as image instead of component */}
            <img
              src={ClassRoomImg}
              alt="classroom"
              className="object-contain h-64 my-3 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
