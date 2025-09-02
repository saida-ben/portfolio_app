import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaLaravel, 
  FaJs, 
  FaDatabase as FaSql 
} from "react-icons/fa";
import { TbFileTypeXml } from "react-icons/tb";
import { BsFiletypeJson } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";

const techIcons = {
  react: <FaReact title="React" color="#61DBFB" size={24} />,
  nodejs: <FaNodeJs title="Node.js" color="#3C873A" size={24} />,
  java: <FaJava title="Java" color="#f89820" size={24} />,
  html: <FaHtml5 title="HTML5" color="#e34c26" size={24} />,
  css: <FaCss3Alt title="CSS3" color="#264de4" size={24} />,
  sql: <TbFileTypeSql title="SQL" color="#00758F" size={24} />,
  git: <FaGitAlt title="Git" color="#F05032" size={24} />,
  github: <FaGithub title="GitHub" color="#181717" size={24} />,
  laravel: <FaLaravel title="Laravel" color="#FF2D20" size={24} />,
  js: <FaJs title="JavaScript" color="#F7DF1E" size={24} />,
  css3: <FaCss3Alt title="CSS3" color="#264de4" size={24} />,
  testing:<img src='./img/junit.png' alt="Power BI" width={24} height={24} />,
  springboot: <SiSpringboot title="Spring Boot" color="#6DB33F" size={24} />,
  xml: <TbFileTypeXml title="XML" color="#0060a0" size={24} />,
  json: <BsFiletypeJson title="JSON" color="#f1c40f" size={24} />,
  mysql: <SiMysql title="MySQL" color="#4479A1" size={24} />,
  powerbi: <img src='./img/powerbi.png' alt="Power BI" width={30} height={30} />,
};


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
              techs: ['java', 'testing', 'git', 'github'],
            },
            {
              img: './img/project2.png',
              link: 'https://github.com/saida-ben/-recruitmentPlatform',
              title: 'Recruitement platform',
              desc: 'Development of a Recruitment Management Platform.',
              github: 'https://github.com/saida-ben/recruitment-platform',
              techs: ['nodeJs', 'react', 'mysql', 'git', 'github'],

            },
            {
              img: './img/project3.png',
              link: 'https://github.com/saida-ben/Feedback_analyzer_project',
              title: 'Feedback analyzer project',
              desc: 'Feedback analyzer project',
              github: 'https://github.com/saida-ben/Feedback_analyzer',
              techs: ['springBoot', 'react','mysql', 'git', 'github'],

            },
            {
              img: './img/project7.png',
              link: '',
              title: 'COVID-19 Dashboard',
              desc: 'COVID-19 Epidemiological Monitoring via Dashboard.',
              github: '',
              techs: ['powerbi', 'json','sql', 'xml', 'dax'],

            },
            {
              img: './img/projet_atfal.png',
              link: '',
              title: ' Children Management',
              desc: ' Web Application for Children Management, Daily Journals, Roles and Users.',
              techs: ['Laravel', 'react','mysql', 'git', 'github'],
            },
            {
              img: './img/project_weather.png',
              link: '',
              title: 'Real-Time Visualization of Weather ',
              desc: 'Real-Time Visualization of Weather Data for Production Adjustment.',
              techs: ['js', 'html', 'CSS'],
            },
          ].map((project, index) => (
            <div key={index} className="project__content">
              <img src={project.img} alt={project.title} className="project__img" />
              <a href={project.link} className="project__link">
                <h3 className="project__title">{project.title}</h3>
              </a>
              <p className="project__description">{project.desc}</p>

              {/* Icônes alignées verticalement */}
              <div className="project__techs">
                {project.techs && project.techs.map((tech, i) => (
                  <span key={i}>{techIcons[tech.toLowerCase()]}</span>
                ))}
              </div>

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
