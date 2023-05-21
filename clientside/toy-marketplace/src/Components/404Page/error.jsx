/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const Error = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  useTitle("404");
  return (
    <div className="error">
      <img src="../../../public/Assests/404.jpg" alt="" />
      <div>
        <div className="flex justify-center absolute top-2 left-1/2">
          <button
            onClick={handleNavigate}
            className="btn-outline btn-primary text-4xl w-28 h-20 rounded-2xl "
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
