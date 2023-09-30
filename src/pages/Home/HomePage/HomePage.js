import Header from "./../Header/Header.js";
import styles from "./HomePage.module.css";
import InternetProtectionLogo from "../../../img/img/Internet Protection.png";
import ProtectLogo from "../../../img/img/proiectare.png";
import ExecutareLogo from "../../../img/img/executare.png";
import FinalizareLogo from "../../../img/img/finalizare.png";
import WoodWorkingLogo from "../../../img/img/woodworking1.png";
import ZidireLogo from "../../../img/img/masonry1.png";
import SanitareLogo from "../../../img/img/Image.png";
import Map from "./Map.js";
import React from "react";
import Footer from "../Footer/Footer.js";
const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.ImageFirstAppearance}>
        <div className={styles['textContainer'] + " container"}>
          <p className={styles.textImageFirstAppearance}>
            Descoperă măiestria meșteșugurilor tradiționale și moderne de la
            <span className={styles.textYellowImageFirstAppearance}>
              {" "}
              Creative Crew Co.
            </span>{" "}
            - echipa ta personalizată pentru produse de calitate!
          </p>
          <p className={styles.textSmallImageFirstAppearance}>
            CREATIVE CREW CO. este o întreprindere familială de meșteșugari din
            Republica Moldova, Republica Moldova, specializată în meșteșuguri
            tradiționale și moderne. De la prelucrarea lemnului până la
            prelucrarea metalelor, oferim produse de calitate cu un finisaj
            profesional, create cu dragoste și dedicație. Permiteți-ne să fim
            echipa dvs. pentru meșteșuguri personalizate!
          </p>

          <div className={styles.accordion} id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={
                    "btn btn-sm btn-outline-warning " +
                    styles.customBtnFirstAppearance
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
              Bun venit pe site-ul nostru dedicat meșteșugarilor talentați din
              Republica Moldova!
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              Suntem aici pentru a vă oferi oportunitatea de a descoperi produse
              unice și personalizate, care nu pot fi găsite în magazinele
              obișnuite. Meșteșugarii din Moldova folosesc tehnici și materiale
              tradiționale pentru a crea îmbrăcăminte, obiecte de decor,
              mobilier sau alte bunuri funcționale și decorative. De asemenea,
              aceștia sunt specializați în repararea sau restaurarea obiectelor
              valoroase, cum ar fi mobilierul vechi sau piesele de colecție.{" "}
              <br /> <br /> Angajarea unui meșteșugar talentat poate fi o
              modalitate de a sprijini economia locală și tradițiile culturale
              ale Moldovei. Aceasta este o oportunitate pentru a vă bucura de
              produse de calitate superioară, realizate cu măiestrie de către
              artiști cu experiență în domeniul lor. La fel de important, vă
              puteți bucura de satisfacția că sprijiniți un sector important al
              economiei locale și contribuiți la promovarea meșteșugurilor
              tradiționale ale Moldovei. <br /> <br /> Explorați site-ul nostru
              pentru a găsi meșteșugari talentați, care sunt dispuși să creeze
              produse personalizate, care să satisfacă nevoile și preferințele
              dumneavoastră. Suntem aici pentru a vă ajuta să găsiți cel mai bun
              meșteșugar pentru nevoile dumneavoastră și să vă conectăm cu
              artiștii talentați din Republica Moldova.
            </p>
            <div className="sectionOccupationButton">
              <button
                className={
                  "btn btn-outline-warning " +
                  styles["btn-sectionOccupationButton"]
                }
              >
                Despre noi
              </button>
            </div>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <ul className={styles["rightSectionOccupationList"]}>
            <li className={styles["listItemrightSectionOcuppation"]}>
              {" "}
              <img
                className={styles.rightSectionOccupationImage}
                src={InternetProtectionLogo}
                alt="InternetProtectie"
              />{" "}
              <h5 className={styles["rightSectionOcuppationHeader"]}>
                Cunoașterea și identificarea nevoilor
              </h5>{" "}
              <p className={styles["rightSectionOcuppationParagraph"]}>
                {" "}
                În această etapă, clienții își exprimă nevoile și preferințele
                și află mai multe despre produsele și serviciile noastre.
              </p>
            </li>
            <li className={styles["listItemrightSectionOcuppation"]}>
              {" "}
              <img
                className={styles.rightSectionOccupationImage}
                src={ProtectLogo}
                alt="#"
              />{" "}
              <h5 className={styles["rightSectionOcuppationHeader"]}>
                Planificarea și proiectarea
              </h5>{" "}
              <p className={styles["rightSectionOcuppationParagraph"]}>
                După ce clienții și-au stabilit nevoile și au ales meșteșugarul
                potrivit, începem să lucrăm împreună pentru a proiecta soluția
                perfectă.
              </p>
            </li>
            <li className={styles["listItemrightSectionOcuppation"]}>
              {" "}
              <img
                className={styles.rightSectionOccupationImage}
                src={ExecutareLogo}
                alt="#"
              />{" "}
              <h5 className={styles["rightSectionOcuppationHeader"]}>
                Executarea și producția
              </h5>{" "}
              <p className={styles["rightSectionOcuppationParagraph"]}>
                Odată ce planul este finalizat și aprobat, meșteșugarul nostru
                va începe să producă produsul personalizat.
              </p>
            </li>
            <li className={styles["listItemrightSectionOcuppation"]}>
              {" "}
              <img
                className={styles.rightSectionOccupationImage}
                src={FinalizareLogo}
                alt="#"
              />{" "}
              <h5 className={styles["rightSectionOcuppationHeader"]}>
                Livrarea și finalizarea
              </h5>{" "}
              <p className={styles["rightSectionOcuppationParagraph"]}>
                După finalizarea produsului, meșteșugarul nostru îl va livra
                clientului, care poate examina și testa produsul.
              </p>
            </li>
          </ul>
        </section>
      </section>
      <section className={styles["sectionQuote"] + " container"}>
        <h2 className={styles["sectionQuoteText"]}>
          “Creative Crew Co. din Moldova mi-a oferit un serviciu de renovare
          extraordinar. Ei au o echipă incredibilă de meșteri cu o manoperă
          remarcabilă și un adevărat ochi pentru detalii. I-aș recomanda tuturor
          celor care caută un serviciu de renovare de top. “
        </h2>
        <p className={styles.sectionQuoteParagraph}>- John S.</p>
      </section>
      <section className={styles["sectionServicii"] + " container"}>
        <p className={styles["sectionServiciiHeader"]}>
          Serviciile pe care le prestează meșteșugarii noștrii experți în
          Republica Moldova{" "}
        </p>
        <p className={styles["sectionServiciiParagraphFirst"]}>
          Pornind de la planificarea produsului dorit de clientul nostru,
          realizăm proiectarea, producția, instalarea și punerea în funcțiune,
          toate aceste etape fiind gestionate de către noi, meșteșugarii noștri.
        </p>

        <ul className={styles["sectionServiciiCards"]}>
          <li className={styles["sectionServiciiCard"]}>
            {" "}
            <img
              className={styles["sectionServiciiCardImage"]}
              src={WoodWorkingLogo}
              alt="#"
            />{" "}
            <p className={styles["sectionServiciiCardHeader"]}>
              Prelucrarea lemnului
            </p>{" "}
            <p className={styles["sectionServiciiCardParagraph "]}>
              Confecționarea de obiecte din lemn, cum ar fi mobilier, dulapuri
              și alte produse din lemn.
            </p>{" "}
          </li>
          <li className={styles["sectionServiciiCard"]}>
            {" "}
            <img
              className={styles["sectionServiciiCardImage"]}
              src={ZidireLogo}
              alt="#"
            />{" "}
            <p className={styles["sectionServiciiCardHeader"]}>Zidire</p>{" "}
            <p
              className={
                styles[
                  "sectionServiciiCardParagraph sectionServiciiCardSecondParagraph"
                ]
              }
            >
              Crearea de structuri și alte obiecte din piatră, cărămidă și
              beton.
            </p>{" "}
          </li>
          <li className={styles["sectionServiciiCard"]}>
            {" "}
            <img
              className={styles["sectionServiciiCardImage"]}
              src={SanitareLogo}
              alt="#"
            />{" "}
            <p className={styles["sectionServiciiCardHeader"]}>
              Instalații sanitare
            </p>{" "}
            <p
              className={
                styles[
                  "sectionServiciiCardParagraph sectionServiciiCardSecondParagraph"
                ]
              }
            >
              Instalarea și repararea sistemelor de apă și canalizare în clădiri
              rezidențiale și comerciale.
            </p>{" "}
         
          </li>
        </ul>
      </section>
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
