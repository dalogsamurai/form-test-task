import { HeaderMenu } from "../components/HeaderMenu";
import { Menu } from "../components/Menu/menu";
import { UpperSection } from "../components/UpperSection/upper-section";
import "./main.page.sass";

const MainPage = () => {
  return (
    <div className="main-page">
      <HeaderMenu />
      <UpperSection />
      <Menu />
    </div>
  );
};

export default MainPage;
