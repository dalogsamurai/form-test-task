import iArrowBtn from "../../assets/arrow-btn.svg";
import "./upper-section.sass";

export const UpperSection = () => {
  return (
    <div className="upper-section">
      <div className="upper-section__title">Название проекта</div>
      <div className="upper-section__title_special">Аббревиатура</div>
      <div className="upper-section__arrow">
        <img src={iArrowBtn} alt="" className="upper-section__img" />
      </div>
    </div>
  );
};
