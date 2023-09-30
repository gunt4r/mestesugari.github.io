import React from "react";
import styles from "./FooterCategorii.module.css";
import imgFooterWood from "../../../img/img/Valcucine-SineTempore-4.1506997156 1.png";
import iconFooterCloud from "../../../img/img/Icon.png"
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerFirstPart}>
            <h5 className={styles.Header}>CREATIVE CREW CO.</h5>
            <ul className={styles["footerNavBar"]}>
              <li className={styles["footerNavbarItems"]}>
                <Link rel="noreferrer" to="/Istoria">
                  Istoria
                </Link>
              </li>
              <li className={styles["footerNavbarItems"]}>
                <Link rel="noreferrer" to="/Categorii">
                  Categorii
                </Link>
              </li>
              <li className={styles["footerNavbarItems"]}>
                <Link rel="noreferrer" to="/Evenimente">
                  Evenimente
                </Link>
              </li>
              <li className={styles["footerNavbarItems"]}>
                <Link rel="noreferrer" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>

            <img src={imgFooterWood} className={styles.imgFooterWood} alt="#" />
          </div>

          <div className={styles.footerSecondPart}>
            <div className={styles["footerSecondPartCenter"]}>
              <img
                className={styles.iconFooterCloud}
                src={iconFooterCloud}
                alt="#"
              />
              <h5 className={styles.HeaderFooterSecond}>Rămâneți în contact</h5>
            </div>
            <p className={styles.ParagraphFooter}>
              Introduceți adresa dvs. de e-mail pentru a vă înregistra la
              abonarea la newsletter-ul nostru!
            </p>
            <button
              type="submit"
              className={"btn btn-sm btn-outline-warning " + styles.formSubmit}
              // de trimis pe email
            >
              Trimiteți mesajul meu
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className={" container " + styles.footerRights}>
        <p className={styles.FooterParagraphRights}>
          Drepturi de autor de Vlad Prangati | Toate drepturile rezervate
        </p>
      </div>
      <Outlet />

    </>
  );
};

export default Footer;
