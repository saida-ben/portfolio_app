import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div
          className="d-grid footer__wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className="footer__content">
            <h4 className="footer__title">{t("followMe")}</h4>
            <ul className="footer__social-list">
              {[
                { href: 'mailto:benzariyasaida@gmail.com', icon: 'fa-regular fa-envelope fa-beat-fade' },
                { href: 'https://api.whatsapp.com/send?phone=713927838', icon: 'fa-brands fa-whatsapp fa-beat-fade' },
                { href: 'https://www.linkedin.com/in/saida-benzariya/', icon: 'fa-brands fa-linkedin-in fa-beat-fade' },
                { href: 'https://github.com/saida-ben', icon: 'fa-brands fa-github fa-fade' },
              ].map((item, i) => (
                <li key={i} className="footer__social-item">
                  <a href={item.href} target="_blank" className="footer__social-link">
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer__copyright">
          &copy; 2025 Saida BENZARIYA. 
        </p>
      </div>
    </footer>
  );
}
