import { useState } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import LeftSideBar from "./components/LeftSideBar";
import Content from "./components/Content";
import RightSideBar from "./components/RightSideBar";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <Navigation openMenu={toggle} />

      <main className="main-container">
        <LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSideBar />
      </main>
    </>
  );
}

export default App;
