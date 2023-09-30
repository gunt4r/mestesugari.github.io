import Header from "../HeaderCategorii/HeaderCategorii";
import styles from "./Categorii.module.css";
import React from "react";
import flagMD from "../../../img/img/flagMd.png";
import videoLemn from "../../../img/video/lemnaritul.mp4";
import videoFier from "../../../img/video/fier.mp4";
import videoPiele from "../../../img/video/Piele.mp4";
import videoTesut from "../../../img/video/tesut.mp4";
import Footer from "../FooterCategorii/FooterCategorii"

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.ImageFirstAppearance}>
        <div className={styles["textContainer"] + " container"}>
          <p className={styles.textImageFirstAppearance}>
            Categorii de meșteșuguri tradiționale din Moldova{" "}
          </p>
          <p className={styles.textSmallImageFirstAppearance}>
            O privire în trecutul bogat al meșteșugurilor moldovenești{" "}
          </p>

          <div className={styles.accordion} id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={
                    "btn btn-sm btn-warning " + styles.customBtnFirstAppearance
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-controls="collapseOne"
                >
                  Află mai multe
                </button>{" "}
              </h2>{" "}
              <div
                id="collapseOne"
                className="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div className={styles["accordion-body"]}>
                  <p>Contactează-ne</p>
                  <p>+373 69403309</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles["sectionOccupation"] + " container"}>
        <section className={styles.leftSectionOccupation}>
          <div className={styles["sectionOccupationText"]}>
            <h4 className={styles["sectionOccupationTextBig"]}>
              Bine ați venit pe pagina noastră dedicată istoriei meșteșugurilor
              moldovenești!
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              Aici veți descoperi o lume fascinantă a meșteșugurilor din lemn,
              țesături, ceramică, metal, piele și sticlă. Aceste meșteșuguri
              sunt o reflectare a culturii și identității moldovenești, dar și o
              sursă importantă de economie locală.
              <br /> <br />
              Meșteșugurile din lemn sunt printre cele mai reprezentative din
              Moldova, datorită îndemânării și creativității meșterilor în
              prelucrarea acestui material. Mobilierul, jucăriile, obiectele de
              artă și instrumentele muzicale sunt doar câteva exemple de produse
              realizate cu ajutorul acestui meșteșug.
              <br /> <br />
              Meșterii din Moldova sunt renumiți pentru producția de țesături de
              înaltă calitate, cu modele tradiționale și culori vii. Covoarele,
              ștergarele, cămășile tradiționale și costumele populare sunt doar
              câteva exemple de produse realizate cu ajutorul meșteșugurilor din
              țesături. Olăritul este unul dintre cele mai vechi și mai
              importante meșteșuguri din Moldova. Meșterii produc vase pentru
              gătit și servit, dar și obiecte de decor și alte tipuri de
              ceramice tradiționale, cu modele și culori specifice.
              <br /> <br />
              Meșterii din Moldova sunt renumiți pentru prelucrarea metalelor
              prețioase și semiprețioase, cum ar fi argintul și aurul, pentru a
              produce bijuterii, tacâmuri și alte obiecte de artă. Tehnicile
              tradiționale sunt folosite pentru a realiza modele frumoase și
              unice.
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <img src={flagMD} className={styles["flagMoldova"]} alt="#" />
        </section>
      </section>
      <section className={styles["sectionQuote"] + " container"}>
        <h2 className={styles["sectionQuoteText"]}>
          Categorii de Meșteșuguri în Moldova
        </h2>
        <p className={styles["sectionQuoteParagraph"]}>
          Descoperă cele mai răspândite și cunoscute meșteșuguri tradiționale
          din Moldova!
        </p>
      </section>
      <section className={styles["sectionOccupation"] + " container"}>
        <section className={styles.leftSectionOccupation}>
          <div className={styles["sectionOccupationText"]}>
            <h4 className={styles["sectionOccupationTextBig"]}>
              Descoperă arta prelucrării lemnului - o călătorie prin
              meșteșugurile tradiționale moldovenești
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              Un video captivant ce dezvăluie secretele și frumusețea
              meșteșugurilor de lemn din Moldova
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <video
            src={videoLemn}
            className={styles["imgDoiOameni"]}
            autoplay
            controls
            height="50%"
            width="60%"
            loop
          ></video>
        </section>
      </section>
      <section className={styles["sectionOccupation"] + " container"}>
        <section className={styles.leftSectionOccupation}>
          <div className={styles["sectionOccupationText"]}>
            <h4 className={styles["sectionOccupationTextBig"]}>
              Descoperă arta tradițională a țesuturilor din Moldova într-un nou
              video captivant
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              De la covoare și ștergare până la costume populare - vezi meșterii
              moldoveni la lucru în acest video impresionant
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <video
            src={videoTesut}
            className={styles["imgDoiOameni"]}
            autoplay
            controls
            height="50%"
            width="60%"
            loop
          ></video>
        </section>
      </section>
      <section className={styles["sectionOccupation"] + " container"}>
        <section className={styles.leftSectionOccupation}>
          <div className={styles["sectionOccupationText"]}>
            <h4 className={styles["sectionOccupationTextBig"]}>
              Descoperă arta prelucrării metalelor prețioase și semiprețioase
              din Moldova
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              Un video fascinant despre meșteșugurile tradiționale moldovenești
              de prelucrare a argintului, aurului și altor metale prețioase
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <video
            src={videoFier}
            className={styles["imgDoiOameni"]}
            autoplay
            controls
            height="50%"
            width="60%"
            loop
          ></video>
        </section>
      </section>
      <section className={styles["sectionOccupation"] + " container"}>
        <section className={styles.leftSectionOccupation}>
          <div className={styles["sectionOccupationText"]}>
            <h4 className={styles["sectionOccupationTextBig"]}>
              Descoperă tradiția meșteșugurilor din piele în Moldova - Un video
              inspirațional
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              Explorarea meșteșugurilor tradiționale de piele în Moldova, de la
              crearea de călăreți la jucării din piele.
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <video
            src={videoPiele}
            className={styles["imgDoiOameni"]}
            autoplay
            controls
            height="50%"
            width="60%"
            loop
          ></video>
        </section>
      </section>
      <Footer/>
    </React.Fragment>
  );
};
export default HomePage;
