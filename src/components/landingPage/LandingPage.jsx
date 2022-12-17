import React from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faCubes,
  faBed,
  faBoxOpen,
  faCartShopping,
  faLeaf,
  faHouse,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  return (
    <>
      <header className={isNavExpanded ? "header header__fixed" : "header"}>
        <div
          id="header__container"
          className={isNavExpanded ? "header__container__expanded" : ""}
        >
          <img
            src={require("../../resources/images/logo_ramaera.png")}
            alt=""
            className="w-16 h-16"
          />
          <nav
            className={
              isNavExpanded ? "navigation__menu expanded" : "navigation__menu"
            }
          >
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
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
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
        <section className="tech">
          <div className="tech__div">
            <img src={require("../../resources/images/tech.png")} alt="" />
            <div className="techDesc__div">
              <div>
                <h2>
                  Unleashing the strength of <span>Technology</span>
                </h2>
                <h4>
                  We believe in innovation and excellence hence , our approach
                  in the field of technology is focused to relish incredible
                  customer experience and stabilising business models for
                  tomorrow.
                </h4>
                <span className="read__btn">
                  Read More
                  <span className="circle_div"></span>
                </span>
              </div>
              <span className="icon__span">
                <FontAwesomeIcon icon={faCubes} />
              </span>
            </div>
          </div>
        </section>

        <section className="accomd">
          <div className="accomd__container">
            <span className="icon__span">
              <FontAwesomeIcon icon={faBed} />
            </span>
            <div>
              <h2>
                Making
                <span>accommodations easier</span>
              </h2>
              <h4>
                Introducing capsule hotels in places of extreme need such as
                examination centres and hospitals to provide comfortable and
                convenient accommodation at pocket friendly prices .
              </h4>
              <span className="read__btn">
                Read More
                <span className="circle_div"></span>
              </span>
            </div>
          </div>
        </section>

        <section className="pckg">
          <div className="pckg__div">
            <img src={require("../../resources/images/packing.png")} alt="" />
            <div className="pckgDesc__div">
              <div>
                <h2>
                  Packaging industry for business <span>growth</span>
                </h2>
                <h4>
                  We provide packaging solutions to help your business flourish
                  with boosted outreach. Ensuring the protection, containment,
                  and communication of packaged projects is our foremost
                  priority.
                </h4>
                <span className="read__btn">
                  Read More
                  <span className="circle_div"></span>
                </span>
              </div>
              <span className="icon__span">
                <FontAwesomeIcon icon={faBoxOpen} />
              </span>
            </div>
          </div>
        </section>

        <section className="fmgc">
          <div className="fmgc__container">
            <span className="icon__span">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <div>
              <h2>
                Offering the best with
                <span>FMCG industry</span>
              </h2>
              <h4>
                Ramaera FMCG industry has commenced an extensive range of FMCG
                to make your days more than ordinary. We plan to offer you
                nothing less than the best.
              </h4>
              <span className="read__btn">
                Read More
                <span className="circle_div"></span>
              </span>
            </div>
          </div>
          <img src={require("../../resources/images/fmcg.png")} alt="" />
        </section>

        <section className="agri">
          <div className="agri__div">
            <img src={require("../../resources/images/agri.png")} alt="" />
            <div className="agriDesc__div">
              <div>
                <h2>
                  Agri-business to bestow <span> Nature's Love </span>
                </h2>
                <h4>
                  Our Agri-business industry is established to get you fresh and
                  organic fruits and vegetables with the blessed with the touch
                  of nature
                </h4>
                <span className="read__btn">
                  Read More
                  <span className="circle_div"></span>
                </span>
              </div>
              <span className="icon__span">
                <FontAwesomeIcon icon={faLeaf} />
              </span>
            </div>
          </div>
        </section>

        <section className="essent">
          <div className="essent__container">
            <span className="icon__span">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <div>
              <h2>
                Get all your essentials in
                <span>one place</span>
              </h2>
              <h4>
                Ramaera Supermart is an online customer oriented marketplace to
                motivated to provide everything you need right at one place
                under the comfort of your homes.
              </h4>
              <span className="read__btn">
                Read More
                <span className="circle_div"></span>
              </span>
            </div>
          </div>
          <img src={require("../../resources/images/ecomrce.png")} alt="" />
        </section>

        <div className="outro">
          <img
            src={require("../../resources/images/small_polygon.png")}
            alt=""
            className="w-16 h-16"
          />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
