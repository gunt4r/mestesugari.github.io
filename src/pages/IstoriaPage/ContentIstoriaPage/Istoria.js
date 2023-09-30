import Header from "../HeaderIstorie/HeaderIstorie";
import styles from "./Istoria.module.css";
import React from "react";
import imgDoiOameni from "../../../img/img/imgDoiOameni.jpg";
import imgWoodWoorking from "../../../img/img/imgWoodWorking.jpg";
import imgTesut from "../../../img/img/imgTesutt.jpg";
import imgOlarit from "../../../img/img/imgOlarit.jpg";
import imgMetal from "../../../img/img/imgMetal.jpg";
import videoMestesugari from "../../../img/video/video.mp4";
import Footer from "../Footer/FooterIstorie.js";
const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.ImageFirstAppearance}>
        <div className={styles["textContainer"] + " container"}>
          <p className={styles.textImageFirstAppearance}>
            Istoria meșteșugurilor molodovenești
          </p>
          <p className={styles.textSmallImageFirstAppearance}>
            "O privire în trecutul bogat al meșteșugurilor moldovenești"
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
              Bine ați venit pe pagina noastră dedicată istoriei meșteșugurilor
              moldovenești!
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              Această pagină își propune să exploreze bogata tradiție a
              meșteșugurilor din Moldova, de la cele mai vechi timpuri și până
              în prezent. Vom descoperi împreună arta prelucrării lemnului,
              confecționarea țesăturilor, producția de ceramică, lucru manual în
              argintărie și multe alte meserii tradiționale. <br /> <br />
              Vom explora modul în care aceste meșteșuguri au evoluat de-a
              lungul timpului, au ajuns să definească cultura și identitatea
              moldovenească, dar și cum au influențat economia și viața de zi cu
              zi a oamenilor din această regiune. <br /> <br />
              Alături de noi, veți descoperi poveștile și secretele meșterilor
              de altădată, dar și pe cele ale celor de astăzi, care au reușit să
              păstreze și să dezvolte aceste meserii tradiționale într-o lume
              modernă și în continuă schimbare.
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <img src={imgDoiOameni} className={styles["imgDoiOameni"]} alt="#" />
        </section>
      </section>
      <section className={styles["sectionQuote"] + " container"}>
        <h2 className={styles["sectionQuoteText"]}>
          Meșteșugurile din Moldova sunt o parte importantă a tradiției și
          culturii moldovenești și reprezintă o îmbinare între artă și
          funcționalitate. Acestea au o istorie îndelungată și s-au dezvoltat
          de-a lungul timpului prin intermediul meșterilor tradiționali, care
          și-au transmis secretele de la o generație la alta.
        </h2>
      </section>
      <section className={styles["sectionServicii"] + " container"}>
        <ul className={styles["sectionServiciiCards"] + " row"}>
          <li
            className={
              styles["sectionServiciiCard"] + " col-lg-6  col-sm-12 col-12"
            }
          >
            {" "}
            <p className={styles["sectionServiciiCardParagraph "]}>
              Unul dintre cele mai cunoscute meșteșuguri din Moldova este
              prelucrarea lemnului. Această meserie a fost practicată încă din
              cele mai vechi timpuri și este încă foarte populară în zilele
              noastre. Meșterii tradiționali au dezvoltat tehnici unice de
              prelucrare a lemnului, de la sculptarea obiectelor funcționale,
              precum ladite, cuie și chiar construcții de lemn, până la obiecte
              de artă precum icoanele și statuetele.
            </p>{" "}
            <img
              src={imgWoodWoorking}
              className={styles["sectionServiciiCardImage"]}
              alt="#"
            />
          </li>
          <li
            className={
              styles["sectionServiciiCard"] + " col-lg-6  col-sm-12 col-12 "
            }
          >
            {" "}
            <p className={styles["sectionServiciiCardParagraph "]}>
              Confecționarea țesăturilor este un alt meșteșug tradițional din
              Moldova, care datează de sute de ani. Această meserie se bazează
              pe tehnici manuale de țesut și brodat, folosind materiale precum
              lână, bumbac și mătase. Meșterii tradiționali creează țesături
              unice și colorate, care sunt apreciate atât pentru frumusețea lor,
              cât și pentru calitatea și durabilitatea lor.
            </p>{" "}
            <img
              src={imgTesut}
              className={styles["sectionServiciiCardImage"]}
              alt="#"
            />
          </li>
          <li
            className={
              styles["sectionServiciiCard"] + " col-lg-6 col-sm-12 col-12 "
            }
          >
            {" "}
            <p className={styles["sectionServiciiCardParagraph "]}>
              Producția de ceramică este o altă tradiție importantă în Moldova.
              Meșterii tradiționali folosesc tehnici manuale de modelare și
              decorare a ceramicelor, creând obiecte decorative și funcționale,
              precum farfurii, boluri, ulcioare și chiar obiecte de artă.
            </p>{" "}
            <img
              src={imgOlarit}
              className={styles["sectionServiciiCardImage"]}
              alt="#"
            />
          </li>
          <li
            className={
              styles["sectionServiciiCard"] + " col-lg-6  col-sm-12 col-12"
            }
          >
            {" "}
            <p className={styles["sectionServiciiCardParagraph "]}>
              Lucrul manual în argintărie este un meșteșug mai rar întâlnit în
              Moldova, dar totuși foarte valoros. Meșterii tradiționali creează
              bijuterii și obiecte decorative din argint, folosind tehnici
              manuale de gravare și filigran.
            </p>{" "}
            <img
              src={imgMetal}
              className={styles["sectionServiciiCardImage"]}
              alt="#"
            />
          </li>
        </ul>
      </section>
      <section className={styles["sectionQuoteAfterServicii"]+ " container"}>
        <p className={styles["sectionQuoteAfterServiciiParagraph"]}>
          Acestea sunt doar câteva exemple de meșteșuguri tradiționale din
          Moldova, care au o istorie bogată și care continuă să fie prețuite și
          apreciate în zilele noastre. Prin învățarea și practicarea acestor
          meșteșuguri, moldovenii și-au păstrat identitatea culturală și au
          reușit să transmită această tradiție de la o generație la alta.
        </p>
      </section>
      <section className={styles["sectionVideo"]}>
        <p className={styles["sectionVideoParagraph"]}>
          Află mai multe despre meșteșugurile țării noastre accesând videoul de
          mai jos !
        </p>
        <video
          className={styles["sectionVideo"]}
          src={videoMestesugari}
          autoplay
          controls
          height="50%"
          width="60%"
          loop
        ></video>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
