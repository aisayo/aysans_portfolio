import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Contact;
