import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation('hero');
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = t('roles', { returnObjects: true }) || [];

  useEffect(() => {
    if (!roles.length) return;

    const interval = setInterval(() => {
      const currentRole = roles[roleIndex];
      setDisplayText(currentRole.slice(0, charIndex + 1));

      if (charIndex + 1 > currentRole.length) {
        // passe au rôle suivant après un petit délai
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000);
      } else {
        setCharIndex(charIndex + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, roleIndex, roles]);

  return (
    <section id="hero" className="hero" style={{ paddingBottom: '80px' }}>
      <div className="container">
        <div className="d-grid hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">{t('greeting')}</h1>

            <h2
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: '#890620',
                borderRight: '2px solid #1e90ff',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              {displayText}
            </h2>
            <p className="hero__description">{t('description')}</p>

            <div className="qualification__footer">
              <p className="qualification__footer-text">{t('resumeText')}</p>
              <a href="/img/cv.pdf" download className="btn btn--primary">
                {t('resumeBtn')}
              </a>
            </div>
          </div>
          <img src="./img/Design sans titre (2).png" alt="Saida" className="hero__img" />
        </div>

        <div className="qualification__footer">
          <div className="hero__info-wrapper">
            <p className="hero__info-number">20+</p>
            <h2 className="hero__info-title">{t('projectsCompleted')}</h2>
          </div>
          <div className="hero__info-wrapper">
            <p className="hero__info-number">4+</p>
            <h2 className="hero__info-title">{t('educationsCompleted')}</h2>
          </div>
          <div className="hero__info-wrapper">
            <p className="hero__info-number">3+</p>
            <h2 className="hero__info-title">{t('internshipsCompleted')}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
