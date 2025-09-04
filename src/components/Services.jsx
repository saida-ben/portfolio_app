import { useTranslation } from "react-i18next";


export default function Services() {
    const { t } = useTranslation("services");

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
          {t("title")}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          <ServiceCard
            icon={<img src="./img/JEE.png" alt="JEE" width={80} height={80} />}
            title={t("jee.title")}
            text={t("jee.text")}
            iconColor="#4299e1"
          />

          <ServiceCard
            icon={<img src="./img/coding.png" alt="Web" width={80} height={80} />}
            title={t("web.title")}
            text={t("web.text")}
            iconColor="#9f7aea"
            logos={[
              { src: "./img/nodejs.png", alt: "Power BI", width: 40, height: 40 },
              { src: "./img/react.png", alt: "Talend", width: 40, height: 40 },
              { src: "./img/js.png", alt: "Pentaho", width: 40, height: 40 },
              { src: "./img/tml.png", alt: "Pentaho", width: 40, height: 40 },
              { src: "./img/css.png", alt: "Pentaho", width: 40, height: 40 },
            ]}
          />

          <ServiceCard
            icon={<img src="./img/devops.png" alt="DevOps" width={80} height={80} />}
            title={t("devops.title")}
            text={t("devops.text")}
            iconColor="#48bb78"
            logos={[
              { src: "./img/git.png", alt: "Power BI", width: 40, height: 40 },
              { src: "./img/github.png", alt: "Talend", width: 40, height:40 },
              { src: "./img/maven.png", alt: "Pentaho", width: 40, height: 40 },
              { src: "./img/junit.png", alt: "Pentaho", width: 40, height: 40 },
            ]}
          />

          <ServiceCard
            icon={<img src="./img/XML.png" alt="XML" width={80} height={80} />}
            title={t("xml.title")}
            text={t("xml.text")}            
            iconColor="#319795"
          />

          {/* BI avec logos */}
          <ServiceCard
            icon={<img src="./img/bi.png" alt="BI" width={80} height={80} />}
            title={t("bi.title")}
            logos={[
              { src: "./img/powerbi.png", alt: "Power BI", width: 80, height: 80 },
              { src: "./img/talend.png", alt: "Talend", width: 80, height: 80 },
              { src: "./img/pentaho.png", alt: "Pentaho", width: 80, height: 80 },
            ]}
            iconColor="#ecc94b"
          />

          <ServiceCard
            icon={<img src="./img/db.png" alt="DB" width={80} height={80} />}
            title={t("db.title")}
            text={t("db.text")}
            iconColor="#ecc94b"
            logos={[
              { src: "./img/mysql.png", alt: "Power BI", width: 70, height: 70 },
              { src: "./img/posql.png", alt: "Talend", width: 70, height: 70 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// ServiceCard corrigé
function ServiceCard({ icon, title, text, iconColor, logos = [] }) {
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
        {typeof icon === "string" ? (
          <i className={icon} style={{ fontSize: '60px', color: iconColor }}></i>
        ) : (
          icon
        )}
      </div>

      <h3
        style={{
          fontSize: '20px',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '12px',
          color: 'black',
        }}
      >
        {title}
      </h3>

      {/* Afficher soit les logos, soit le texte */}
      {logos.length > 0 ? (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '12px',
          }}
        >
          {logos.map((lg, i) => (
            <img
              key={i}
              src={lg.src}
              alt={lg.alt}
              width={lg.width || 40}
              height={lg.height || 40}
              style={{ objectFit: 'contain', display: 'block' }}
            />
          ))}
        </div>
      ) : (
        <p style={{ color: 'black', textAlign: 'center' }}>{text}</p>
      )}
    </div>
  );
}
