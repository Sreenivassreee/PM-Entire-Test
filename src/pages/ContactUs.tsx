import React, { useState } from "react";
import "/Users/sreenivask/web-dev/react/first/first/src/css/aboutus.css";

import "../css/contactus.css";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [finalOutPut, setFinalOutPut] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function submitButton(e: any) {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      company !== "" &&
      message !== ""
    ) {
      setFinalOutPut(
        `(${name} - ${email} - ${phone} - ${company} - ${message})`
      );
      setErrorMessage("");
    } else {
      setFinalOutPut("");
      setErrorMessage("Invalid Form");
    }
  }

  return (
    <>
      <main>
        <section className="banner contactUs">
          <h1 className="heading">Start a conversation today!</h1>
        </section>

        <section className="formWrapper">
          <p className="formWrapper_text">
            Want to try out our software solutions? Or speak to one of our sales
            representatives who can quickly understand your requirements?
            <strong>Fill out the form below to register your interest!</strong>
          </p>
          <div className="formWrapper_container">
            <div className="imageContainer">
              <img
                className="lazy-hidden"
                src="./images/contact-main-img.webp"
                alt="contact-main-img"
                width="685"
                height="765"
              />
            </div>
            <div className="formContainer">
              <h2 className="formContainer_heading">Contact Us</h2>
              <form onSubmit={submitButton}>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email Address</label>
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label>Phone Number</label>
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtCompanyName"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <label>Company Name</label>
                </div>
                <div className="inputWrapper">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label>Message</label>
                </div>
                <div className="inputWrapper">
                  <button className="btn whiteBtn" type="submit">
                    REQUEST FREE TRIAL
                  </button>
                </div>
                {errorMessage && (
                  <span id="formInput" className="text">
                    {errorMessage}
                  </span>
                )}
                <span id="formInput" className="text">
                  {" "}
                  {finalOutPut}
                </span>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default ContactUs;
