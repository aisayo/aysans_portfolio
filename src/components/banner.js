import React from "react";

const Banner = () => {
  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1624399708998-94647fb54999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'auto',
        // height: '100vh',
        // width: '100vh',
        border: "10px solid",
        borderColor: "red",
      }}
    ></div>
  );
};

export default Banner;
