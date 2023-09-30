import styles from "./Header.module.css";
import { Outlet, Link } from "react-router-dom";
import "./Header.module.css";
import facebookLogo from "../../../img/img/Facebook.png";
import linkedinLogo from "../../../img/img/linkedin-icon-1-logo-png-transparent.png";
import instagramLogo from "../../../img/img/insta.png";
const Header = () => (
  <header className={styles.CasaHeader + " container"}>
    <nav className="navbar navbar-expand-xl">
      <div
        className="container-fluid"
      >
        <Link className={styles["navbar-brand"]} aria-current="page" to="/">
          <h4 className={styles["Casa-logo"]}>CREATIVE CREW CO.</h4>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 ">
            <li className={styles["nav-item"]}>
              <Link className={styles["nav-link"]} to="Istoria">
                Istoria
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link className={styles["nav-link"]} to="Categorii">
                Categorii
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link className={styles["nav-link"]} to="Evenimente">
                Evenimente
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link className={styles["nav-link"]}  to="/Contact">
                Contact
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} id={styles["socialSites"]} href="alt">
                <div className={styles["social-media"]}>
                  <div className={styles["social-media-logo-linkedin"]}>
                    <Link
                      to="https://www.linkedin.com/in/vlad-prangati-71436b28b/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <img src={linkedinLogo} id={styles["linkedinLogo"]} width="20px" alt="alt" />
                    </Link>
                  </div>
                  <div className={styles["social-media-logo-instagram"]}>
                    <Link
                      to="https://www.instagram.com/prangati.1/?next=%2F"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <img src={instagramLogo} width="20px" alt="alt" />
                    </Link>
                  </div>
                  <div className={styles["social-media-logo-facebook"]}>
                    <Link
                      to="https://www.facebook.com/vlad.prangati/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <img src={facebookLogo} width="24px" alt="alt" />
                    </Link>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
  </header>
);

export default Header;
