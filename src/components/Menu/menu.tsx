import { FolderTitle } from "../FolderTitle/folder-title";
import { MenuItemList } from "../MenuItemList/menu-item-list";
import { UpperSection } from "../UpperSection/upper-section";
import "./menu.sass";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__upper">
        <UpperSection />
        <FolderTitle />
      </div>
      <div className="menu__list">
        <MenuItemList />
      </div>
    </div>
  );
};
