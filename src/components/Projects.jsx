

export default function Projects() {
  return (
    <section id="project" className="section project">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">My recent work</span>
        </div>

        <div className="d-grid project__wrapper">
          {[
            {
              img: './img/project3',
              link: 'https://github.com/saida-ben/BadSmellHunter',
              title: 'Bad smell hunter',
              desc: ' Detection of Bad Smells and Refactoring in Java Code.',
              github: 'https://github.com/saida-ben/BadSmellHunter',
            },
            {
              img: './img/project2.png',
              link: 'https://github.com/saida-ben/-recruitmentPlatform',
              title: 'Recruitement platform',
              desc: 'Development of a Recruitment Management Platform.',
              github: 'https://github.com/saida-ben/-recruitmentPlatform',
            },
            {
              img: './img/project3.png',
              link: 'https://github.com/saida-ben/Feedback_analyzer_project',
              title: 'Feedback analyzer project',
              desc: 'Feedback analyzer project',
              github: 'https://github.com/saida-ben/Feedback_analyzer_project',
            },
            {
              img: './img/project7.png',
              link: '',
              title: 'COVID-19 Dashboard',
              desc: 'COVID-19 Epidemiological Monitoring via Dashboard.',
              github: '',
            },
            {
              img: './img/projet_atfal.png',
              link: '',
              title: ' Children Management',
              desc: ' Web Application for Children Management, Daily Journals, Roles and Users.',
              github: '',
            },
            {
              img: './img/project_weather.png',
              link: '',
              title: 'Real-Time Visualization of Weather ',
              desc: 'Real-Time Visualization of Weather Data for Production Adjustment.',
              github: '',
            },
          ].map((project, index) => (
            <div key={index} className="project__content">
              <img src={project.img} alt={project.title} className="project__img" />
              <a href={project.link} className="project__link">
                <h3 className="project__title">{project.title}</h3>
              </a>
              <p className="project__description">{project.desc}</p>
              <a href={project.github} className="project__link">
                View Project <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            marginTop: '50px',
          }}
        >
          <a
            href="https://github.com/saida-ben?tab=repositories"
            className="btn--primary"
            style={{
              padding: '1.5rem 4rem',
              marginTop: '10px',
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            View More Projects <i className="fa-solid fa-angle-down fa-bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
