

export default function About() {
    return(
        <section id="about" className="section about">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">About Me</h2>
                    <span className="section__subtitle">Who am I</span>
                </div>
                <div className="d-grid about__wrapper">
                    <div className="about__content">
                        <h3 className="about__title">I'm a Professional and Experienced Software Developer.</h3>
                        <p className="about__description">Ingénieur en informatique avec une bonne 
                            expérience sur les architectures logicielles et les nouvelles technologies
                             informatique, en l'occurrence Jakarta EE, Spring Boot, React et Angular. Expérimentée dans la gestion de projets agiles, planification, exécution et coordination des tâches avec des équipes multifonctionnelles. Disposant des compétences requises en communication et en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes et les membres de l'équipe.
                        </p>
                        <a href="#project" className="btn btn--primary">Know More</a>
                    </div>
                    <div className="skills">
                        <h3 className="skills__title">Technologies I've been working with:</h3>
                        <div className="skills__wrapper">
                            <div className="skills__content">
                                <h4 className="skills__subtitle">Backend</h4>
                                <ul className="skills__list">

                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        JAVA</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        Node.js</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        MongoDB</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        MySQL</li>
                                </ul>
                            </div>
                            <div className="skills__content">
                                <h4 className="skills__subtitle">Frontend</h4>
                                <ul className="skills__list">
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        HTML</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        CSS</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        JavaScript</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        Bootstrap</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        React</li>
                                    <li className="skills__item"><i className="ri-arrow-right-s-fill"></i>
                                        Next JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}