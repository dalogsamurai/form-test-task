import { FolderTitle } from "../FolderTitle/folder-title";
import { UpperSection } from "../UpperSection/upper-section";
import "./menu.sass";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__upper">
        <UpperSection />
        <FolderTitle />
      </div>
    </div>
  );
};
