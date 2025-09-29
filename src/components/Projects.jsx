import { useState } from "react";
import { 
  FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, 
  FaLaravel, FaJs, FaPhp, FaBootstrap 
} from "react-icons/fa";
import { TbFileTypeXml, TbFileTypeSql } from "react-icons/tb";
import { BsFiletypeJson } from "react-icons/bs";
import { SiMysql, SiSpringboot, SiJunit5 } from "react-icons/si";
import { useTranslation } from "react-i18next";

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
  php: <FaPhp title="PHP" color="#777BB4" size={24} />,
  bootstrap: <FaBootstrap title="Bootstrap" color="#7952B3" size={24} />,
  testing: <SiJunit5 title="JUnit" color="#25A162" size={24} />,
  springboot: <SiSpringboot title="Spring Boot" color="#6DB33F" size={24} />,
  xml: <TbFileTypeXml title="XML" color="#0060a0" size={24} />,
  json: <BsFiletypeJson title="JSON" color="#f1c40f" size={24} />,
  mysql: <SiMysql title="MySQL" color="#4479A1" size={24} />,
  powerbi: <img src="./img/icons8-power-bi-2021-48.png" alt="Power BI" width={30} height={30} />
};

export default function Projects() {
  const { t } = useTranslation("projects");
  const [selectedImg, setSelectedImg] = useState(null);

  const closeModal = () => setSelectedImg(null);

  const projects = [
    {
      img: './img/prj-badsmells.png',
      link: 'https://github.com/saida-ben/BadSmellHunter',
      title: t("projects.list.badsmell.title"),
      desc: t("projects.list.badsmell.desc"),
      github: 'https://github.com/saida-ben/BadSmellHunter',
      techs: ['java', 'testing', 'git', 'github'],
    },
    {
      img: './img/Screenshot 2025-09-12 192435.png',
      link: 'https://github.com/saida-ben/recruitment-platform',
      title: t("projects.list.recruitment.title"),
      desc: t("projects.list.recruitment.desc"),
      github: 'https://github.com/saida-ben/recruitment-platform',
      techs: ['nodejs', 'react', 'mysql', 'git', 'github'],
    },
    {
      img: './img/sb_prj.png',
      link: 'https://github.com/saida-ben/Feedback_analyzer_project',
      title: t("projects.list.feedback.title"),
      desc: t("projects.list.feedback.desc"),
      github: 'https://github.com/saida-ben/Feedback_analyzer_project',
      techs: ['springboot', 'react', 'mysql', 'git', 'github'],
    },
    {
      img: './img/project7.png',
      link: '',
      title: t("projects.list.covid.title"),
      desc: t("projects.list.covid.desc"),
      github: '',
      techs: ['powerbi', 'json','sql','xml'],
    },
    {
      img: './img/projet_atfal.png',
      link: 'https://github.com/saida-ben/Association-Management-System',
      title: t("projects.list.children.title"),
      desc: t("projects.list.children.desc"),
      techs: ['laravel', 'react','mysql', 'git', 'github'],
      github: 'https://github.com/saida-ben/Association-Management-System',
    },
    {
      img: './img/project_weather.png',
      link: '',
      title: t("projects.list.weather.title"),
      desc: t("projects.list.weather.desc"),
      techs: ['js', 'html', 'css'],
    },
    {
      img: './img/image.png',
      link: '',
      title: t("projects.list.offres.title"),
      desc: t("projects.list.offres.desc"),
      techs: ['powerbi'],
    },
    {
      img: './img/ests_prj.png',
      link: 'https://github.com/saida-ben/Merise-xml',
      title: t("projects.list.ests.title"),
      desc: t("projects.list.ests.desc"),
      techs: ['html', 'css', 'laravel', 'xml', 'mysql'],
      github: 'https://github.com/saida-ben/Merise-xml',
    },
    {
      img: './img/stock_prj.png',
      link: 'https://github.com/saida-ben/gestion-stock',
      title: t("projects.list.stock.title"),
      desc: t("projects.list.stock.desc"),
      techs: ['php', 'mysql', 'bootstrap'],
      github: 'https://github.com/saida-ben/gestion-stock',
    },
  ];

  return (
    <section id="project" className="section project">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t("projects.title")}</h2>
          <span className="section__subtitle">{t("projects.subtitle")}</span>
        </div>

        <div className="d-grid project__wrapper">
          {projects.map((project, index) => (
            <div key={index} className="project__content">
              <img 
                src={project.img} 
                alt={project.title} 
                className="project__img" 
                onClick={() => setSelectedImg(project.img)}
                style={{ cursor: "pointer" }}
              />
              <a href={project.link} className="project__link" target="_blank" rel="noreferrer">
                <h3 className="project__title">{project.title}</h3>
              </a>
              <p className="project__description">{project.desc}</p>

              <div className="project__techs">
                {project.techs && project.techs.map((tech, i) => (
                  <span key={i}>{techIcons[tech.toLowerCase()]}</span>
                ))}
              </div>

              {project.github && (
                <a href={project.github} className="project__link" target="_blank" rel="noreferrer">
                  {t("projects.viewProject")} <i className="ri-arrow-right-line"></i>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* MODALE D’IMAGE */}
        {selectedImg && (
          <div 
            onClick={closeModal} 
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <img 
              src={selectedImg} 
              alt="preview" 
              style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }}
            />
          </div>
        )}

        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '50px' }}>
          <a
            href="https://github.com/saida-ben?tab=repositories"
            className="btn--primary"
            style={{ padding: '1.5rem 4rem', marginTop: '10px', display: 'inline-block', textAlign: 'center' }}
            target="_blank"
            rel="noreferrer"
          >
            {t("projects.viewMore")} <i className="fa-solid fa-angle-down fa-bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
