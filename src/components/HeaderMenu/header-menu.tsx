import iArrow from "../../assets/arrow.svg";
import iMenu from "../../assets/menu.svg";
import "./header-menu.sass";

export const HeaderMenu = () => {
  //не очень понял идею с barrel export, поэтому так
  return (
    <div className="header-menu">
      <div className="header-menu__item">
        <img src={iMenu} alt="" className="header-menu__img" />
      </div>
      <div className="header-menu__item">
        <img src={iArrow} alt="" className="header-menu__img" />
      </div>
      <div className="header-menu__item">Просмотр</div>
      <div className="header-menu__item">Управление</div>
    </div>
  );
};
