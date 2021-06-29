import React from "react";

const Home = () => {
  return (
    <section
      className="mt-0 min-h-screen p-32 text-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1444791252404-500e5b11f71b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-bold text-5xl mb-6 mt-20">Aysan Isayo</h1>
      <p className="mb-12">Full Stack Software Engineer</p>
      <div className="mt-10">
        <a href="#">down arrow</a>
      </div>
    </section>
  );
};

export default Home;
