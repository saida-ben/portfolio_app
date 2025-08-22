

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="d-grid contact__wrapper">
          <div className="contact__content">
            <h2 className="contact__title">Interested in working together? Let's talk</h2>
            <p className="contact__description">
              Ready to work together on your next software project? I'd love to hear from you!
              Feel free to get in touch using the contact information below.
              I’ll respond as quickly as possible and look forward to connecting soon.
            </p>
          </div>
          <div className="contact__btn">
            <a
              href="https://www.linkedin.com/in/shjz"
              className="btn btn--secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'center',
              }}
            >
              Get in touch <i className="fa-solid fa-handshake"></i>
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            letterSpacing: '1.4px',
            marginTop: '10px',
          }}
        >
          <div style={{ flex: '0 1 700px', margin: 'auto', padding: '10px', width: '100%' }}>
            <div
              style={{
                position: 'relative',
                background: '#3e3e3e',
                borderRadius: '15px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  background: '#4d4d4f',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              >
                <div style={{ marginRight: 'auto' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      marginRight: '3px',
                      borderRadius: '8px',
                      background: '#ed1c6f',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      marginRight: '3px',
                      borderRadius: '8px',
                      background: '#e8e925',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '8px',
                      background: '#74c54f',
                    }}
                  ></div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', padding: '20px' }}>
                <div style={{ flex: 1, padding: '20px', color: '#32a852' }}>
                  <div style={{ fontSize: '26px', marginBottom: '10px' }}>
                    <span>CONTACT ME</span>
                  </div>
                </div>
                <div>
<a href="https://docs.google.com/forms/d/e/xxxxxx/viewform" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
  Open Contact Form
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
