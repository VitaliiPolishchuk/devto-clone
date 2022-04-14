import React, { useState } from "react";
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Navigation = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={() => props.openMenu()}
        ></div>

        <a href="https://dev.to" className="headerContainer__logo">
          <FaDev size="3.125rem" />
        </a>
        <div className="headerContainer__searchBox">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="headerContainer__right">
          <button>Write a Post</button>
          <i className="hidden-search">
            <FiSearch />
          </i>
          <i>
            <BiMessageRoundedCheck />
          </i>
          <i>
            <RiNotificationLine />
          </i>
          <span onClick={toggle}>
            <img src="https://picsum.photos/200" alt="Profile Picture" />
          </span>
        </div>
      </div>

      <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
        <ul>
          <li onClick={() => toggle()}>
            <a href="/profile"></a>
            <div className="u-name">VitaliiPolishchuk</div>
            <small className="u-name-id">@codebucks</small>
          </li>
          <li onClick={() => toggle()}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li onClick={() => toggle()}>
            <a href="/post">Writing a Post</a>
          </li>
          <li onClick={() => toggle()}>
            <a href="/list">Reading list</a>
          </li>
          <li onClick={() => toggle()}>
            <a href="/settings">Settings</a>
          </li>
          <li onClick={() => toggle()}>
            <a href="/signout">Signout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
