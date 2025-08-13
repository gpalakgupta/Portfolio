import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // default reload rokna

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data); // Debugging: dekhna Web3Forms kya return kar raha hai

      if (data.success) {
        setSubmitted(true);
        e.target.reset(); // form clear
      } else {
        setError("❌ " + (data.message || "Something went wrong!"));
      }
    } catch (err) {
      setError("❌ Network error, please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Get In Touch...</h2>
        <p className="contact-subtitle">Feel free to reach out to me!</p>

        {submitted ? (
          <p className="success-message">
            ✅ Thank you! Your message has been sent.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Web3Forms hidden required fields */}
            <input
              type="hidden"
              name="access_key"
              value="7347c55a-f99d-4f51-a3bc-2714c349407c"
            />
            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact Form Submission"
            />
            <input type="hidden" name="from_name" value="Palak's Portfolio" />

            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here"
              required
            />

            <button type="submit" className="send-btn">
              Send
            </button>

            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
