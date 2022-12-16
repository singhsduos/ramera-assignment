import React from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faCubes
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
                <li className="dropdown">
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
        <div className="intro__container">
          <div className="social_media">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="company__intro">
            <h1>Ramaera</h1>
            <h1>Industries</h1>
            <h2>
              An incredible multi-industrial approach oriented towards financial
              independence, customer focus and serving the best quality to the
              people.
            </h2>
            <button>Explore More</button>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="ramaera__expansion">
          <div className="ramaera__div">
            <img
              src={require("../../resources/images/big_polygon.png")}
              alt=""
              className="polygon__img"
            />
            <div className="ramaera__heading__div">
              <h1>The Ramaera Expansion</h1>
              <h2>
                We are aiming to be a part of the major industrialisation drive
                in India and embarking our presence in every significant
                industrial domain including IT.
              </h2>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default LandingPage;
