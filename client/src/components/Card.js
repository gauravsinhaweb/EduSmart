import React from "react";

const Card = props => {
  return (
    <div className="mx-auto h-64 sm:w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight 	">
      <div className="text-white text-2xl text-center flex justify-center h-full items-center font-medium">
        {props.title}
      </div>
    </div>
  );
};

export default Card;
