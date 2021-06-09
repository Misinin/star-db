import React from "react";

import style from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={`container ${style.header}`}>
        <h1>Star DB</h1>
        <nav>
          <ul className={style.navigation}>
            <li>
              <a className={style.link} href="#">
                People
              </a>
            </li>
            <li>
              <a className={style.link} href="#">
                Planets
              </a>
            </li>
            <li>
              <a className={style.link} href="#">
                Starships
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
