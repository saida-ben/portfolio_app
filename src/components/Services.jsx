export default function Services() {
  return (
    <section
      id="services"
      className="section services"
      style={{ padding: '80px 0', backgroundColor: 'inherit' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
            marginBottom: '32px',
          }}
        >
          technology Skills
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Service Card Example */}
          <ServiceCard
            icon="ri-layout-4-fill"
            title="Jakarta Enterprise Edition (JEE)"
            text="Framework Spring / Spring Boot, JPA, Hibernate, Administration Tomcat, 3-tier Architecture, MVC2 Model, Servlets and JSP, DAO Pattern"
            iconColor="#4299e1"
          />

          <ServiceCard
            icon="ri-pen-nib-fill"
            title="Ingénierie du Web"
            text="HTML, CSS, JavaScript, Node.js, React"
            iconColor="#9f7aea"
          />

          <ServiceCard
            icon="ri-code-s-slash-line"
            title="Ingénierie DevOps"
            text="Maven, Git, GitHub, GitLab, Jira, Jenkins, JUnit, Selenium"
            iconColor="#48bb78"
          />

          <ServiceCard
            icon="ri-smartphone-line"
            title="Technologie XML"
            text="Standard XML, Bases de données XML, Parseurs XML (DOM, SAX), DTD, XSD (XML Schema), XSLT, XPath, XQuery"
            iconColor="#319795"
          />

          <ServiceCard
            icon="ri-share-fill"
            title="BI "
            text="Power BI, Talend, Pentaho."
            iconColor="#ecc94b"
          />
          <ServiceCard
            icon="ri-share-fill"
            title="DB | Data Formats"
            text="MySQL, PostgreSQL | JSON, XML."
            iconColor="#ecc94b"
          />
        </div>
      </div>
    </section>
  );
}

// Petite fonction pour éviter la répétition
function ServiceCard({ icon, title, text, iconColor }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <i className={icon} style={{ fontSize: '40px', color: iconColor }}></i>
      </div>
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '8px',
          color: 'black',
        }}
      >
        {title}
      </h3>
      <p style={{ color: 'black', textAlign: 'center' }}>{text}</p>
    </div>
  );
}
