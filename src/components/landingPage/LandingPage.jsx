import React from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";


const LandingPage = () => {

  return (
    <>
      <header className="header">
        <div id="header__container">
          <img
            src={require("../../resources/images/logo_ramaera.png")}
            alt=""
            className="w-16 h-16"
          />
          <nav>
            <ul>
              <div className="navbar__homeDiv">
                <li>
                  <a href="#home" className="active__link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#industries">
                    OUR INDUSTRIES
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="arrowDown__icon"
                    />
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#companies">
                    OUR COMPANIES
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="arrowDown__icon"
                    />
                  </a>
                </li>
              </div>

              <div className="navbar__contactDiv">
                <li>
                  <a href="#carrer">Carrer</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="search__icon"
                  />
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
