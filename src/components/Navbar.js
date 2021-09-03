import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { useHistory } from "react-router";

function Navbar(props) {
  const { onHover, setOnHover } = props;
  const history = useHistory();
  return (
    <>
      <div
        className={`rounded-r-2xl h-screen bg-tertiary transition-all group  ${
          !onHover ? "w-16" : "w-64"
        }`}
      >
        <div
          onClick={() => setOnHover(!onHover)}
          className={`text-white font-light text-2xl p-1 w-12 ml-2  py-12 cursor-pointer   ${
            onHover ? "hidden" : null
          }`}
        >
          <GiHamburgerMenu />
        </div>
        <div className={`${onHover ? "hidden" : null}`}>
          <div
            onClick={() => history.push("home")}
            className="mt-6  cursor-pointer  text-white font-light text-2xl p-1 w-12 ml-2 border-b border-white border-opacity-50 py-4"
          >
            <AiFillHome />
          </div>
          <div
            onClick={() => history.push("classroom")}
            className="mt-6  cursor-pointer  text-white font-light text-2xl p-1 w-12 ml-2 border-b border-white border-opacity-50 py-4"
          >
            <SiGoogleclassroom />
          </div>
          <div
            onClick={() => history.push("chat")}
            className="mt-6  cursor-pointer  text-white font-light text-2xl p-1 w-12 ml-2 border-b border-white border-opacity-50 py-4"
          >
            <BsFillChatDotsFill />
          </div>
          <div
            onClick={() => history.push("contributors")}
            className="mt-6  cursor-pointer  text-white font-light text-2xl p-1 w-12 ml-2 border-b border-white border-opacity-50 py-4"
          >
            <RiTeamFill />
          </div>
        </div>

        <div className={`${!onHover ? "hidden" : "visible "}`}>
          <div
            onClick={() => setOnHover(!onHover)}
            className={`ml-48 py-12 text-white font-light text-2xl p-1 w-12 ml-2 cursor-pointer ${
              !onHover ? "hidden" : null
            }`}
          >
            <HiMenuAlt3 />
          </div>
          <div className="flex  m-8 cursor-pointer ">
            <span className="text-white p-1 text-2xl">
              <AiFillHome />
            </span>

            <span className="text-white font-light text-2xl p-1  border-b border-white border-opacity-50 flex h-12  align-center">
              Home
            </span>
          </div>{" "}
          <div className="flex m-8 cursor-pointer">
            <span className="text-white p-1 text-2xl flex h-12  align-center">
              <SiGoogleclassroom />
            </span>

            <span className="text-white font-light text-2xl p-1  border-b border-white border-opacity-50 flex h-12  align-center">
              Classroom
            </span>
          </div>{" "}
          <div className="flex m-8 cursor-pointer">
            <span className="text-white p-1 text-2xl flex h-12  align-center">
              <BsFillChatDotsFill />
            </span>

            <span className="text-white font-light text-2xl p-1  border-b border-white border-opacity-50 flex h-12  align-center">
              Chat
            </span>
          </div>{" "}
          <div className="flex m-8 cursor-pointer">
            <span className="text-white p-1 text-2xl flex h-12  align-center">
              <RiTeamFill />
            </span>

            <span className="text-white font-light text-2xl p-1  border-b border-white border-opacity-50 flex h-12  align-center">
              Contributors
            </span>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Navbar;
