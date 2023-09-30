import Header from "../HeaderContact/HeaderContact";
import React from "react";
import styles from "./Contact.module.css";
import Footer from "../FooterContact/FooterContact";
import Map from "../../Home/HomePage/Map";
const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles["anunt"]+" container"}>
        <h2 className={styles["anuntHeading"]}>ACEST SITE ESTE UN SITE PERSONAL PENTRU PORTOFOLIU</h2>
        <h5 className={styles["anuntParagraph"]}>Făcut de Vlad Prangati</h5>
      </div>
      <div className={styles["anunt"]+" container"}>
        <h2 className={styles["anuntHeading"]}>DACĂ DORIȚI UN SITE ASEMĂNĂTOR SUNAȚI LA NUMĂRUL DE MAI JOS</h2>
        <h3 className={styles["anuntParagraph"]}>+37378527212</h3>
      </div>
      <div className={"container"}>
        <div className={styles["map"]}>
          <Map className={styles["mapYandex"]} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
