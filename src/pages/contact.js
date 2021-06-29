import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <form
        method="post"
        action="https://getform.io/f/40874dcf-8ae8-4515-abfc-18eef08b7e3a"
      >
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
      <div id="social-links">
        <ul>
          <li>
            <img src="https://img.icons8.com/nolan/50/email-open.png" />{" "}
            <a href="mailto:aisayo@icloud.com">aisayo@icloud.com</a>
          </li>
          <li>
            <img src="https://img.icons8.com/nolan/50/linkedin.png" />{" "}
            <a href="https://www.linkedin.com/in/aisayo/" target="_blank">
              https://www.linkedin.com/in/aisayo/
            </a>
          </li>
          <li>
            <img src="https://img.icons8.com/nolan/50/github.png" />{" "}
            <a href="https://github.com/aisayo" target="_blank">
              https://github.com/aisayo
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contact;
