import React from "react";
import aboutImg from "../images/about_photo.jpeg";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-6/12 sm:w-4/12 px-4">
        <img
          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
          src={aboutImg}
        />
      </div>
    </div>
  );
};

export default Home;
