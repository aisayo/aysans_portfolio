import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-serif block w-full text-center mb-6">Contact</h1>
      <div className="bg-indigo-200 flex-wrap content-center w-full max-w-lg ">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="post"
          action="https://getform.io/f/40874dcf-8ae8-4515-abfc-18eef08b7e3a"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="md:font-serif mb-2 uppercase font-bold text-lg text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border py-1 px-2 text-grey-darkest"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="md:font-serif mb-2 uppercase font-bold text-lg text-white">
              Email
            </label>
            <input type="email" name="email" id="email" className="border" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="subject" className="md:font-serif mb-2 uppercase font-bold text-lg text-white">
              Subject
            </label>
            <input type="text" name="subject" id="subject" className="border" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="md:font-serif mb-2 uppercase font-bold text-lg text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="border py-2 px-3 text-white"
            />
          </div>
          <button
            className="w-full rounded bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>

      <div id="social-links">
        <ul>
          <li>
            <img src="https://img.icons8.com/nolan/50/email-open.png" alt="Email Icon"/>{" "}
            <a href="mailto:aisayo@icloud.com">aisayo@icloud.com</a>
          </li>
          <li>
            <img src="https://img.icons8.com/nolan/50/linkedin.png" alt="LinkedIn Icon"/>{" "}
            <a href="https://www.linkedin.com/in/aisayo/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/aisayo/
            </a>
          </li>
          <li>
            <img src="https://img.icons8.com/nolan/50/github.png" alt="Github Icon"/>{" "}
            <a href="https://github.com/aisayo" target="_blank" rel="noopener noreferrer">
              https://github.com/aisayo
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contact;
