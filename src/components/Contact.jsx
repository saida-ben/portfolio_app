import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eswa7na",
        "template_g5d1tsl",
        form.current,
        "QtcFYRl0J890VXALY"
      )
      .then((result) => {
        alert(`Merci ${form.current.from_name.value} ! Votre message a été envoyé.`);
        e.target.reset();
    },
      (error) => {
          alert("Une erreur est survenue. Veuillez réessayer.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="d-grid contact__wrapper">
          <div className="contact__content">
            <h2 className="contact__title">
              Interested in working together? Let's talk
            </h2>
            <p className="contact__description">
              Ready to work together on your next software project? I'd love to
              hear from you! Feel free to get in touch using the contact
              information below. I’ll respond as quickly as possible and look
              forward to connecting soon.
            </p>
          </div>

          <div className="contact__btn">
            <a
              href="https://www.linkedin.com/in/shjz"
              className="btn btn--primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textAlign: "center",
              }}
            >
              Get in touch <i className="fa-solid fa-handshake"></i>
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            letterSpacing: "1.4px",
            marginTop: "10px",
          }}
        >
          <div style={{ flex: "0 1 700px", margin: "auto", padding: "10px", width: "100%" }}>
            <div
              style={{
                position: "relative",
                background: "#3e3e3e",
                borderRadius: "15px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  background: "#4d4d4f",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <div style={{ marginRight: "auto" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      marginRight: "3px",
                      borderRadius: "50%",
                      background: "#ed1c6f",
                    }}
                  ></span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      marginRight: "3px",
                      borderRadius: "50%",
                      background: "#e8e925",
                    }}
                  ></span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#74c54f",
                    }}
                  ></span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <div style={{ flex: 1, padding: "20px" }}>
                  <h3 style={{ fontSize: "26px", marginBottom: "20px", color: "#208c61"}}>CONTACT ME</h3>

                  <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                      <label className="block font-semibold">Nom</label>
                      <input
                        type="text"
                        name="from_name"
                        required
className="form-input"                       />
                    </div>
                    <div className="form-group"> 
                      <label className="block font-semibold">Email</label>
                      <input
                        type="email"
                        name="from_email"
                        required
className="form-input"                       />
                    </div>
                    <div className="form-group">
                      <label className="block font-semibold">Message</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
className="form-textarea"                      ></textarea>
                    </div>
                    <button
                      type="submit"
                    className="btn btn--primary mt-4 submit-btn"
                    >
                      Envoyer
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
