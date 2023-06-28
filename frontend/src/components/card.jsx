import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(`/blog/${props.id}`);
  };
  return (
    <div>
      <div className=" text-center shadow-sm border-t-2 border-b-2 border-t-red-400 border-b-red-400 p-7 mt-3 mb-3 bg-red-100">
        <h1 className=" text-4xl ">"{props.title}"</h1>
        <h2 className=" text-lg pb-4">written by {props.user}</h2>
        <h3 className=" text-base font-thin pb-2">{props.date}</h3>
        <button
          onClick={handleButton}
          className=" border-solid border-2 border-red-500 rounded-md p-1 bg-red-500 text-white hover:bg-transparent hover:text-red-500"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
