import { Folder } from "../components/Folder/folder";
import { HeaderMenu } from "../components/HeaderMenu";
import { Menu } from "../components/Menu/menu";
import "./main.page.sass";

const MainPage = () => {
  return (
    <div className="main-page">
      <HeaderMenu />
      <Menu />
    </div>
  );
};

export default MainPage;
