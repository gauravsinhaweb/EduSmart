import React from "react";
import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useHistory } from "react-router";

const Navbar = ({ onHover, setOnHover = () => {} }) => {
  const history = useHistory();

  return (
    <>
      <div
        className={`rounded-r-2xl h-screen sticky top-0 z-50" bg-tertiary transition-all group w-1/6 max-w-max min-w-max ${
          !onHover ? "sm:w-20" : "sm:w-64"
        }`}>
        <div
          onClick={() => setOnHover(!onHover)}
          className={`text-white font-light text-2xl p-1 w-12 ml-4  py-12 cursor-pointer   ${
            onHover ? "hidden" : null
          }`}>
          <HiMenuAlt1 />
        </div>
        <div className={`${onHover ? "hidden" : null}`}>
          <div
            onClick={() => history.push("home")}
            className="mt-6  cursor-pointer opacity-80 hover:opacity-100  text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4">
            <AiFillHome />
          </div>
          <div
            onClick={() => history.push("classroom")}
            className="mt-6  cursor-pointer opacity-80 hover:opacity-100  text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4">
            <SiGoogleclassroom />
          </div>
          <div
            onClick={() => history.push("chat")}
            className="mt-6  cursor-pointer opacity-80 hover:opacity-100  text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4">
            <BsFillChatDotsFill />
          </div>
          <div
            onClick={() => history.push("contributors")}
            className="mt-6  cursor-pointer opacity-80 hover:opacity-100  text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4">
            <RiTeamFill />
          </div>
          <div
            onClick={() => history.push("faq")}
            className="mt-6  cursor-pointer opacity-80 hover:opacity-100  text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4">
            <GiMagnifyingGlass />
          </div>
        </div>

        {/* section-2 */}

        <div className={`overflow-hidden	 ${!onHover ? "hidden" : "visible "}`}>
          <div
            onClick={() => setOnHover(!onHover)}
            className={`ml-48 py-12 text-white font-light text-2xl p-1 w-12 ml-2 cursor-pointer ${
              !onHover ? "hidden" : null
            }`}>
            <HiMenuAlt3 />
          </div>
          <div
            onClick={() => history.push("home")}
            className="flex  m-8 cursor-pointer opacity-90 hover:opacity-100 ">
            <span className="text-white px-2  text-2xl">
              <AiFillHome />
            </span>

            <span className="text-white font-light text-2xl px-2   border-b border-white border-opacity-50 flex h-12  align-center">
              Home
            </span>
          </div>
          <div
            onClick={() => history.push("classroom")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100">
            <span className="text-white px-2  text-2xl flex h-12  align-center">
              <SiGoogleclassroom />
            </span>

            <span className="text-white font-light text-2xl px-2   border-b border-white border-opacity-50 flex h-12  align-center">
              Classroom
            </span>
          </div>
          <div
            onClick={() => history.push("chat")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100">
            <span className="text-white px-2  text-2xl flex h-12  align-center">
              <BsFillChatDotsFill />
            </span>

            <span className="text-white font-light text-2xl px-2   border-b border-white border-opacity-50 flex h-12  align-center">
              Chat
            </span>
          </div>
          <div
            onClick={() => history.push("contributors")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100">
            <span className="text-white px-2  text-2xl flex h-12  align-center">
              <RiTeamFill />
            </span>

            <span className="text-white font-light text-2xl px-2   border-b border-white border-opacity-50 flex h-12  align-center ">
              Contributors
            </span>
          </div>

          <div
            onClick={() => history.push("faq")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100">
            <span className="text-white px-2  text-2xl flex h-12  align-center">
              <GiMagnifyingGlass />
            </span>

            <span className="text-white font-light text-2xl px-2   border-b border-white border-opacity-50 flex h-12  align-center ">
              FAQs
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  onHover: PropTypes.bool,
  setOnHover: PropTypes.func
};

export default Navbar;
