import React from "react";
import PropTypes from "prop-types";

const Card = ({ title = "" }) => {
  return (
    <div className="mx-auto h-64 sm:w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight 	">
      <div className="text-white text-2xl text-center flex justify-center h-full items-center font-medium">
        {title}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
