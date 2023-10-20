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
    <div className={`rounded-lg h-screen sticky top-0 left-0 z-50 bg-tertiary transition-all group w-16 max-w-max min-w-max ${!onHover ? "sm:w-20" : "sm:w-64"} ${scrolling ? "blur-effect" : ""} ${showing ? "show-effect" : ""}`}>
      <div onClick={() => setOnHover(!onHover)} className={`text-white font-light text-2xl p-1 w-12 ml-4 py-12 cursor-pointer ${onHover ? "hidden" : null}`}>
        <HiMenuAlt1 />
      </div>

      <div className={`${onHover ? "hidden" : null}`}>
        <MenuItem
          icon={<AiFillHome />}
          text="Home"
          onClick={() => history.push("/home")}
          isActive={isActive("/home")}
        />
        <MenuItem
          icon={<SiGoogleclassroom />}
          text="Classroom"
          onClick={() => history.push("/classroom")}
          isActive={isActive("/classroom")}
        />
        <MenuItem
          icon={<BsFillChatDotsFill />}
          text="Chat"
          onClick={() => history.push("/chat")}
          isActive={isActive("/chat")}
        />
        <MenuItem
          icon={<RiTeamFill />}
          text="Contributors"
          onClick={() => history.push("/contributors")}
          isActive={isActive("/contributors")}
        />
        <MenuItem
          icon={<GiMagnifyingGlass />}
          text="FAQs"
          onClick={() => history.push("/faq")}
          isActive={isActive("/faq")}
        />
      </div>

      {/* section-2 */}
      <div className={`overflow-hidden ${!onHover ? "hidden" : "visible"}`}>
        <div onClick={() => setOnHover(!onHover)} className={`ml-48 py-12 text-white font-light text-2xl p-1 w-12 ml-2 cursor-pointer ${!onHover ? "hidden" : null}`}>
          <HiMenuAlt3 />
        </div>
        <MenuItem icon={<AiFillHome />} text="Home" onClick={() => history.push("home")} />
        <MenuItem icon={<SiGoogleclassroom />} text="Classroom" onClick={() => history.push("classroom")} />
        <MenuItem icon={<BsFillChatDotsFill />} text="Chat" onClick={() => history.push("chat")} />
        <MenuItem icon={<RiTeamFill />} text="Contributors" onClick={() => history.push("contributors")} />
        <MenuItem icon={<GiMagnifyingGlass />} text="FAQs" onClick={() => history.push("faq")} />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, onClick, isActive }) => (
  <div className={`flex m-8 cursor-pointer opacity-80 hover:opacity-100 items-center ${isActive ? "active-icon" : ""}`} onClick={onClick}>
    <div className="text-white px-2 text-2xl">{icon}</div>
    <div className="text-white font-light text-2xl px-2 border-b border-white border-opacity-50 flex h-12 align-center">
      {text}
    </div>
  </div>
);

Navbar.propTypes = {
  onHover: PropTypes.bool,
  setOnHover: PropTypes.func,
};

MenuItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Navbar;
