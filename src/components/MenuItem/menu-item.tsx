import { FC } from "react";
import iMenuItem from "../../assets/menu-item-img.svg";
import "./menu-item.sass";

type Props = {
  title: string;
};
export const MenuItem: FC<Props> = ({ title }) => {
  return (
    <div className="menu-item">
      <img src={iMenuItem} alt="" className="menu-item__img" />
      <div className="menu-item__text">{title}</div>
    </div>
  );
};
