import Header from "../HeaderEvenimente/HeaderEvenimente";
import styles from "./Evenimente.module.css";
import React from "react";
import videoLemn from "../../../img/video/lemnaritul.mp4";
import videoFier from "../../../img/video/fier.mp4";
import videoPiele from "../../../img/video/Piele.mp4";
import videoTesut from "../../../img/video/tesut.mp4";
import Footer from "../FooterEvenimente/FooterEvenimente";
import videoTargMestesuguri from "../../../img/video/targulMestesuguri.mp4";
import videoOpinci from "../../../img/video/opinciDacice.mp4"

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.ImageFirstAppearance}>
        <div className={styles["textContainer"] + " container"}>
          <p className={styles.textImageFirstAppearance}>
            Evenimente și expoziții
          </p>
          <p className={styles.textSmallImageFirstAppearance}>
            O privire în trecutul bogat al meșteșugurilor moldovenești
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
              Festivalul Mestesugurilor Moldovei: Descoperă frumusețea
              tradițională
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              12-13 august 2023, Chișinău - Admirația și achiziționarea de
              produse meșteșugărești autentice. La acest eveniment vor fi
              prezenți meșteri populari din toată Moldova, care își vor expune
              și vinde produsele realizate manual, precum cojoace, opinci,
              borsete și multe altele.
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
              Atelier de creație: Crează-ți propria tașcă moldovenească
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              18 septembrie 2023, Orhei - Învață cum să faci una dintre cele mai
              populare accesorii tradiționale moldovenești. În acest atelier de
              creație, participanții vor avea ocazia să își creeze propria tașcă
              moldovenească, sub îndrumarea unui meșter popular. Vor fi
              disponibile o varietate de materiale, inclusiv piele, țesături și
              accesorii.
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
              Expoziția de artizanat din Bălți
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              2-3 iunie 2023, Bălți - Descoperă meșteșugurile unice ale
              regiunii. Această expoziție va prezenta unele dintre cele mai bune
              și mai frumoase produse de artizanat din Bălți și împrejurimi,
              inclusiv țesături, obiecte din lemn, cojoace și multe altele.
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
              Târgul de meșteșuguri și antichități
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              7-8 octombrie 2023, Soroca - Găsește piese unice de artizanat și
              antichități. La acest târg, participanții vor avea ocazia să
              găsească piese unice de artizanat, inclusiv obiecte din lemn,
              țesături, bijuterii și multe altele. De asemenea, vor fi prezente
              și antichități, pentru cei pasionați de istorie și colecționare.
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <video
            src={videoTargMestesuguri}
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
              Sărbătoarea Cojocarilor: O sărbătoare a meșteșugarilor moldoveni
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
              4-6 noiembrie 2023, Comrat - Demonstrații live de creare a
              cojoacelor, ateliere și mâncare tradițională. În timpul acestei
              sărbători a meșteșugarilor moldoveni, participanții vor avea
              ocazia să observe cum se fac cojoacele autentice moldovenești, să
              participe la ateliere de meșteșuguri și să se bucure de mâncare
              tradițională.
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
      <section className={styles["sectionOccupation"] + " container"}>
        <section className={styles.leftSectionOccupation}>
          <div className={styles["sectionOccupationText"]}>
            <h4 className={styles["sectionOccupationTextBig"]}>
            Workshop de cusut opinci
            </h4>

            <p className={styles["sectionOccupationTextSmall"]}>
            25 august 2023, Călărași - Învață cum să faci opinci în stil moldovenesc. Acest workshop de meșteșuguri moldovenești se va concentra pe cusutul opincilor, o încălțăminte tradițională moldovenească. Participanții vor învăța cum să-și măsoare picioarele, să croiască și să cusă aceste opinci autentice.
            </p>
          </div>
        </section>
        <section className={styles.rightSectionOccupation}>
          <video
            src={videoOpinci}
            className={styles["imgDoiOameni"]}
            autoplay
            controls
            height="50%"
            width="60%"
            loop
          ></video>
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
