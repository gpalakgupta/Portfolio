import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Get In Touch...</h2>
        <p className="contact-subtitle">Feel free to reach out to me!</p>

        {submitted ? (
          <p className="success-message">✅ Thank you! Your message has been sent.</p>
        ) : (
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            {/* Web3Forms hidden required fields */}
            <input type="hidden" name="access_key" value="7347c55a-f99d-4f51-a3bc-2714c349407c" />
            <input type="hidden" name="subject" value="New Portfolio Contact Form Submission" />
            <input type="hidden" name="from_name" value="Palak's Portfolio" />

            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Type your message here" required />

            <button type="submit" className="send-btn">Send</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
