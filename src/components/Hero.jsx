import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const texts = [
    "Frontend Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Creative Problem Solver",
  ];

  useEffect(() => {
    let index = 0;
    let char = 0;
    const interval = setInterval(() => {
      setText(texts[index].slice(0, char));
      char++;
      if (char > texts[index].length) {
        setTimeout(() => {
          char = 0;
          index = (index + 1) % texts.length;
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero"
          style={{ paddingBottom: '80px' }}
    >
      <div className="container">
        <div className="d-grid hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">Hi, I am Saida</h1>
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
             {text}
            </h2>
            <p className="hero__description">Ingénieur en informatique avec une bonne expérience sur les architectures logicielles et les nouvelles technologies informatique, en l'occurrence Jakarta EE, Spring Boot, React et Angular. Expérimentée dans la gestion de projets agiles, planification, exécution et coordination des tâches avec des équipes multifonctionnelles. Disposant des compétences requises en communication et en résolution de problèmes avec un esprit 
                ouvert en collaboration efficace avec les parties prenantes et les membres de l'équipe.</p>

                    <div className="qualification__footer">
                <p className="qualification__footer-text">See my full resume</p>
                <a href="public/img/cv.pdf" download className="btn btn--primary">Resume</a>
            </div>
          </div>
          <img src="./img/Design sans titre (2).png" alt="Saida" className="hero__img" />
        </div>
        <div class="qualification__footer">
            <div class="hero__info-wrapper">
                <p class="hero__info-number">20+</p>
                <h2 class="hero__info-title">Projects Completed</h2>
            </div>
            <div class="hero__info-wrapper">
                <p class="hero__info-number">4+</p>
                <h2 class="hero__info-title">Educations Completed</h2>
            </div>
            <div class="hero__info-wrapper">
                <p class="hero__info-number">3+</p>
                <h2 class="hero__info-title">Interships Completed</h2>
            </div>
        </div>
      </div>

    </section>
  );
}
