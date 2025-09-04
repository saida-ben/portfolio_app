import { useTranslation } from "react-i18next";
import { GrCertificate } from "react-icons/gr";
import { IoBusiness } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";

export default function Qualification() {
  const { t } = useTranslation("qualification");

  return (
    <section id="qualification" className="section qualification">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t("title")}</h2>
          <span className="section__subtitle">{t("subtitle")}</span>
        </div>

        {/* Experience */}
        <div className="qualification__wrapper">
          <h3 className="qualification__name">
            <i className="ri-briefcase-fill"></i>
            {t("experience")}
          </h3>
          <div className="d-grid qualification__content">
            <div className="qualification__item">
              <h3 className="qualification__title">{t("exp1_title")}</h3>
              <div className="qualification__header">
                <IoBusiness className="nav__icon" />
                <h4 className="qualification__title">{t("exp1_company")}</h4>
              </div>
              <p className="qualification__description">{t("exp1_desc")}</p>
              <BsCalendarDateFill className="date__icon" />
              <span className="qualification__date">{t("exp1_date")}</span>
            </div>

            <div className="qualification__item">
              <h3 className="qualification__title">{t("exp2_title")}</h3>
              <div className="qualification__header">
                <IoBusiness className="nav__icon" />
                <h4 className="qualification__title">{t("exp2_company")}</h4>
              </div>
              <p className="qualification__description">{t("exp2_desc")}</p>
              <BsCalendarDateFill className="date__icon" />
              <span className="qualification__date">{t("exp2_date")}</span>
            </div>

            <div className="qualification__item">
              <h3 className="qualification__title">{t("exp3_title")}</h3>
              <div className="qualification__header">
                <IoBusiness className="nav__icon" />
                <h4 className="qualification__title">{t("exp3_company")}</h4>
              </div>
              <p className="qualification__description">{t("exp3_desc")}</p>
              <BsCalendarDateFill className="date__icon" />
              <span className="qualification__date">{t("exp3_date")}</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="qualification__wrapper">
          <h3 className="qualification__name">
            <i className="ri-booklet-fill"></i>
            {t("education")}
          </h3>
          <div className="d-grid qualification__content">
            <div className="qualification__item">
              <div className="qualification__header">
                <GrCertificate className="nav__icon" />
                <h3 className="qualification__title">{t("edu1_title")}</h3>
              </div>
              <h4 className="qualification__title">{t("edu1_school")}</h4>
              <BsCalendarDateFill className="date__icon" />
              <span className="qualification__date">{t("edu1_date")}</span>
            </div>

            <div className="qualification__item">
              <div className="qualification__header">
                <GrCertificate className="nav__icon" />
                <h3 className="qualification__title">{t("edu2_title")}</h3>
              </div>
              <h4 className="qualification__title">{t("edu2_school")}</h4>
              <BsCalendarDateFill className="date__icon" />
              <span className="qualification__date">{t("edu2_date")}</span>
            </div>

            <div className="qualification__item">
              <div className="qualification__header">
                <GrCertificate className="nav__icon" />
                <h3 className="qualification__title">{t("edu3_title")}</h3>
              </div>
              <h4 className="qualification__title">{t("edu3_school")}</h4>
              <BsCalendarDateFill className="date__icon" />
              <span className="qualification__date">{t("edu3_date")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
