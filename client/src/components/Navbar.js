import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useHistory, useLocation } from "react-router";

const Navbar = ({ onHover, setOnHover = () => {} }) => {
  const history = useHistory();
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname === path;
  };
  
  const [scrolling, setScrolling] = useState(false);
  const [showing, setShowing] = useState(false);
  let showTimeout;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        setShowing(true);
        clearTimeout(showTimeout);
        showTimeout = setTimeout(() => {
          setScrolling(false);
        }, 500);
      } else {
        clearTimeout(showTimeout);
        setShowing(false);
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`rounded-lg h-screen sticky top-0 left-0 z-50 bg-tertiary transition-all group w-16 max-w-max min-w-max ${
          !onHover ? "sm:w-20" : "sm:w-64"
        } ${scrolling ? "blur-effect" : ""} ${showing ? "show-effect" : ""}`}
      >
        <div
          onClick={() => setOnHover(!onHover)}
          className={`text-white font-light text-2xl p-1 w-12 ml-4 py-12 cursor-pointer ${
            onHover ? "hidden" : null
          }`}
        >
          <HiMenuAlt1 />
        </div>
        <div className={`${onHover ? "hidden" : null}`}>
          <div
            onClick={() => history.push("/home")}
            className={`mt-6 cursor-pointer opacity-80 hover:opacity-100 text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4 ${
              isActive("/home") ? "active-icon" : ""
            }`}
          >
            <AiFillHome />
            <span className="ml-2">Home</span>
          </div>
          <div
            onClick={() => history.push("/classroom")}
            className={`mt-6 cursor-pointer opacity-80 hover:opacity-100 text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4 ${
              isActive("/classroom") ? "active-icon" : ""
            }`}
          >
            <SiGoogleclassroom />
            <span className="ml-2">Classroom</span>
          </div>
          <div
            onClick={() => history.push("/chat")}
            className={`mt-6 cursor-pointer opacity-80 hover:opacity-100 text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4 ${
              isActive("/chat") ? "active-icon" : ""
            }`}
          >
            <BsFillChatDotsFill />
            <span className="ml-2">Chat</span>
          </div>
          <div
            onClick={() => history.push("/contributors")}
            className={`mt-6 cursor-pointer opacity-80 hover:opacity-100 text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4 ${
              isActive("/contributors") ? "active-icon" : ""
            }`}
          >
            <RiTeamFill />
            <span className="ml-2">Contributors</span>
          </div>
          <div
            onClick={() => history.push("/faq")}
            className={`mt-6 cursor-pointer opacity-80 hover:opacity-100 text-white font-light text-2xl p-1 w-8 ml-4 border-b border-white border-opacity-50 py-4 ${
              isActive("/faq") ? "active-icon" : ""
            }`}
          >
            <GiMagnifyingGlass />
            <span className="ml-2">FAQs</span>
          </div>
        </div>

        {/* section-2 */}

        <div className={`overflow-hidden ${!onHover ? "hidden" : "visible "}`}>
          <div
            onClick={() => setOnHover(!onHover)}
            className={`ml-48 py-12 text-white font-light text-2xl p-1 w-12 ml-2 cursor-pointer ${!onHover ? "hidden" : null}`}
          >
            <HiMenuAlt3 />
          </div>
          <div
            onClick={() => history.push("home")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100 "
          >
            <span className="text-white px-2 text-2xl">
              <AiFillHome />
            </span>
            <span className="text-white font-light text-2xl px-2 border-b border-white border-opacity-50 flex h-12 align-center">
              Home
            </span>
          </div>
          <div
            onClick={() => history.push("classroom")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100"
          >
            <span className="text-white px-2 text-2xl flex h-12 align-center">
              <SiGoogleclassroom />
            </span>
            <span className="text-white font-light text-2xl px-2 border-b border-white border-opacity-50 flex h-12 align-center">
              Classroom
            </span>
          </div>
          <div
            onClick={() => history.push("chat")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100"
          >
            <span className="text-white px-2 text-2xl flex h-12 align-center">
              <BsFillChatDotsFill />
            </span>
            <span className="text-white font-light text-2xl px-2 border-b border-white border-opacity-50 flex h-12 align-center">
              Chat
            </span>
          </div>
          <div
            onClick={() => history.push("contributors")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100"
          >
            <span className="text-white px-2 text-2xl flex h-12 align-center">
              <RiTeamFill />
            </span>
            <span className="text-white font-light text-2xl px-2 border-b border-white border-opacity-50 flex h-12 align-center">
              Contributors
            </span>
          </div>
          <div
            onClick={() => history.push("faq")}
            className="flex m-8 cursor-pointer opacity-90 hover:opacity-100"
          >
            <span className="text-white px-2 text-2xl flex h-12 align-center">
              <GiMagnifyingGlass />
            </span>
            <span className="text-white font-light text-2xl px-2 border-b border-white border-opacity-50 flex h-12 align-center">
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
