import { GrCertificate } from "react-icons/gr";
import { IoBusiness } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";

export default function Qualification() {

    return(

        <section id="qualification" className="section qualification">
            <div className="container" >
                <div className="section__header">
                    <h2 className="section__title">Qualification</h2>
                    <span className="section__subtitle">Experience & Education</span>
                </div>
                <div className="qualification__wrapper">
                    <h3 className="qualification__name">
                        <i className="ri-briefcase-fill"></i>
                        Professional Experience
                    </h3>
                    <div className="d-grid qualification__content">
                        <div className="qualification__item">
                            <h3 className="qualification__title">UI/UX Designer Intern</h3>
                            <div className="qualification__header">
                                <IoBusiness className="nav__icon" />
                                <h4 className="qualification__title">Lume Agency, France</h4>
                            </div>                            
                            <p className="qualification__description">
                                Designed user interfaces for e-commerce websites using Figma, focusing on user experience, responsiveness, and visual consistency.
                            </p>
                            <BsCalendarDateFill className='date__icon'/>
<span className="qualification__date" >April 2024 - June 2024</span>
                        </div>
                        <div className="qualification__item">
                            <h3 className="qualification__title">Fullstack Developer Intern</h3>
                            <div className="qualification__header">
                                <IoBusiness className="nav__icon" />
                                <h4 className="qualification__title">OCP - Safi</h4>
                            </div>
                            <p className="qualification__description">Developed a web application for real-time visualization of weather data for production adjustment.</p>
                                                       <BsCalendarDateFill className='date__icon'/>
 <span className="qualification__date">April 2023 - June 2023</span>
                        </div>
                        <div className="qualification__item">
                            <h3 className="qualification__title">Fullstack Developer Intern</h3>
                            <div className="qualification__header">
                                <IoBusiness className="nav__icon" />
                                <h4 className="qualification__title">Marjane Holding - Safi</h4>
                            </div>
                            <p className="qualification__description">
                                Developed a web application for managing customer orders and inventory, improving operational efficiency and customer satisfaction.                            
                            </p>
                                                       <BsCalendarDateFill className='date__icon'/>
 <span className="qualification__date">July 2022 - August 2022</span>
                        </div>
                    </div>

                </div>
                <div className="qualification__wrapper">
                    <h3 className="qualification__name">
                        <i className="ri-booklet-fill"></i>
                        Education
                    </h3>
                    
                    <div className="d-grid qualification__content">
                        <div className="qualification__item">
                            <div className="qualification__header">
                                <GrCertificate className="nav__icon" />
                                <h3 className="qualification__title">DUT in Computer Engineering</h3>
                            </div>                            
                            <h4 className="qualification__title">EST - Cadi Ayyad University - Safi</h4>
                            <p className="qualification__description">
                            </p>
                            <BsCalendarDateFill className='date__icon'/>
                            <span className="qualification__date">2021 - 2023</span>
                        </div>
                        <div className="qualification__item">
                            <div className="qualification__header">
                                <GrCertificate className="nav__icon" />
                                <h3 className="qualification__title">LP ISIR</h3>
                            </div> 
                            <h4 className="qualification__title">EST - Cadi Ayyad University - Safi</h4>
                            <p className="qualification__description"></p>
                            <BsCalendarDateFill className='date__icon'/>
                            <span className="qualification__date">2023 - 2024</span>
                        </div>
                        <div className="qualification__item">
                            <div className="qualification__header">
                                <GrCertificate className="nav__icon" />
                                <h3 className="qualification__title">Master in Software Quality</h3>
                            </div> 
                            <h4 className="qualification__title">FSDM - Fez</h4>
                            <p className="qualification__description"></p>
                            <BsCalendarDateFill className='date__icon'/>
                            <span className="qualification__date">Completed in 2026</span>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    
    
    );

}