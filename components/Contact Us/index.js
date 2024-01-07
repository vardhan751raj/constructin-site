import React, { useState, useEffect, useRef } from "react";
import classes from "./index.module.scss";
// import EmailImage from '/images/gamil_732200.png'

const index = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [mobile, setMobile] = useState("");
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const contactObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Adjust threshold as needed
  //   );

  //   contactObserver.observe(contactRef.current);

  //   return () => {
  //     contactObserver.disconnect();
  //   };
  // }, []);

  const fnameChangeHandler = (event) => {
    setFname(event.target.value);
  };

  const lnameChangeHandler = (event) => {
    setLname(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const mobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const submitClickHandler = async (event) => {
    event.preventDefault();
    try {
      setFormIsSubmitting(true);
      // const response = await sendMail({
      //   name: `${fname} ${lname}`,
      //   email: email,
      //   text: text,
      //   product: product,
      // });

      const emailData = {
        name: `${fname} ${lname}`,
        email: email,
        text: text,
        mobile: mobile,
      };

      fetch("http://localhost:9000/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
      console.log("submit clicked");
      // setFname("");
      // setLname("");
      // setEmail("");
      // setText("");
      // setMobile("");
      if (response.status === 200) {
        setFormIsSubmitting(false);
        setFormSubmitted(true);
      }
      setTimeout(() => {
        setFormSubmitted(false);
      }, 2000);
    } catch (error) {
      setFormIsSubmitting(false);
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 2000);
    }
  };

  return (
    <section className={classes.contactus} id="mail">
      <div className={classes.div}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={classes.detail}>
            {/* <h1>Contact Us</h1>
          <h1>Get In Touch</h1>
          <p>With Our Expert</p> */}

            <p class={classes.component}>CONTACT US</p>
            <p class={classes.heading}>
              <span
                style={{
                  background: "linear-gradient(to right, #3A4DF5, #18BDE3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get In Touch With An Expert
                <br></br>
              </span>
              {/* with an Expert */}
            </p>

            <ul className={classes.list}>
              <li style={{ display: "flex", gap: "1.1rem" }}>
                <img src="/images/gmail.png" style={{ width: "2.5rem" }} />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className={classes.text}>sanrachna.co@gmail.com</p>
                </div>
              </li>

              <li style={{ display: "flex", gap: "1rem" }}>
                <img src="/images/phone.png" style={{ width: "2.5rem" }} />

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className={classes.text}>9005262627, 9810273848</p>
                </div>
              </li>

              <li style={{ display: "flex", gap: "1rem" }}>
                <img
                  src="/images/placeholder.png"
                  style={{ width: "2.5rem" }}
                />

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className={classes.text}>
                    Sikka Karmik Greens, Sector-78
                    <br></br>
                    Noida
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.formDiv}>
          <form className={classes.form}>
            <div className={classes.row}>
              <div className={classes.input__div}>
                <label className={classes.label} for="">
                  First Name
                </label>
                <input
                  className={classes.input}
                  type="text"
                  autoComplete="given-name"
                  name="firstName"
                  id="firstName"
                  value={fname}
                  onChange={fnameChangeHandler}
                  required
                />
              </div>

              <div className={classes.input__div}>
                <label className={classes.label} for="">
                  Last Name
                </label>
                <input
                  className={classes.input}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  value={lname}
                  onChange={lnameChangeHandler}
                  required
                />
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.input__div}>
                <label className={classes.label} for="">
                  Email
                </label>
                <input
                  className={classes.input}
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
              <div className={classes.input__div}>
                <label className={classes.label} for="">
                  Mobile
                </label>

                <input
                  className={classes.input}
                  type="text"
                  name="mobile"
                  id="mobile"
                  autoComplete="mobile"
                  value={mobile}
                  onChange={mobileChangeHandler}
                />
              </div>
            </div>

            <div className={classes.textarea}>
              <div className={classes.text__div}>
                <label className={classes.label} for="">
                  Write to us
                </label>
                <textarea
                  className={classes.textarea__input}
                  rows="8"
                  cols="120"
                  onChange={textChangeHandler}
                  value={text}
                  required
                  style={{ overflow: "hidden", height: "5rem" }}
                ></textarea>
                <div class={classes.submitButton}>
                  {/* <Button
                      // position={classes.button}
                      title="Submit"
                      onClick={submitClickHandler}
                    /> */}
                  <div
                    className={classes.button}
                    title="Submit"
                    onClick={submitClickHandler}
                  >
                    <p className={classes.p}>SUBMIT</p>
                  </div>
                </div>
                {formIsSubmitting && <p>Form is Submitting</p>}
                {formSubmitted && <p>Form Submitted Successfully</p>}
                {formError && <p>Internal Server Error</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default index;
