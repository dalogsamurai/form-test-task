import { MenuItem } from "../MenuItem/menu-item";
import "./menu-item-list.sass";

export const MenuItemList = () => {
  return (
    <div className="menu-item-list">
      <MenuItem title="По проекту" />
      <MenuItem title="Объекты" />
      <MenuItem title="РД" />
      <MenuItem title="СМР" />
      <MenuItem title="График" />
      <MenuItem title="МиМ" />
      <MenuItem title="Рабочие" />
      <MenuItem title="Капвложения" />
      <MenuItem title="Бюджет" />
      <MenuItem title="Финансирование" />
      <MenuItem title="Панорамы" />
      <MenuItem title="Камеры" />
      <MenuItem title="Поручения" />
      <MenuItem title="Контрагенты" />
    </div>
  );
};
