import React, { useEffect } from "react";
import styles from "./Map.module.css";
import ImageGirlLogo from "../../../img/img/Ellipse 6.png";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=a543f5ca-f071-4ac8-aa6f-59063896d91a&lang=ru_RU";
    script.async = true;

    script.onload = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("map", {
          center: [47.001804, 28.868699],
          zoom: 18,
        });
        const marker = new window.ymaps.Placemark([47.001804, 28.868699], {
          hintContent: "Место маркера",
          balloonContent: "Содержимое маркера",
        });

        // Добавьте маркер на карту
        map.geoObjects.add(marker);
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="row">
      <div className={"col-md-8 "}>
        <form
          action="https://jsonplaceholder.typicode.com/posts"
          className={styles["form"]}
          method="GET"
        >
          <p className={styles["formHeader"]}>Luați legătura cu noi</p>
          <div className={styles["formGirl"]}>
            <img
              src={ImageGirlLogo}
              className={styles["formImageGirl"]}
              alt="#"
            />
            <div className={styles["formGirlSquare"]}>
              <p className={styles["formGirlSpeech"]}>
                Bună, eu sunt Amanda. Ai nevoie de ajutor? Folosiți formularul
                de mai jos sau trimiteți-mi un e-mail la
                vladprangati@gmail.com
              </p>
            </div>
          </div>
          <div className="formNameInput">
            <label htmlFor="inputName">Nume</label>
            <input
              required
              type="text"
              className={styles["inputName"]}
              id="inputName"
              placeholder="Vlad Prangati"
            />
          </div>
          <div className="formEmailInput">
            <label htmlFor="inputEmail">Email</label>
            <input
              required
              type="text"
              className={styles["inputEmail"]}
              id="inputEmail"
              placeholder="vladprangati@gmail.com"
            />
          </div>
          <div className="formTextInput">
            <label htmlFor="inputText">Mesaj</label>
            <textarea
              required
              rows="4"
              cols="50"
              type="textarea"
              className={styles["inputText"]}
              id="inputText"
              placeholder="Scrieți întrebarea dvs. aici....."
            />
          </div>

          <button
            type="submit"
            className={
              "btn btn-sm btn-outline-warning " +
              styles.formSubmit
            }
          >
            Trimiteți mesajul meu
          </button>
        </form>
      </div>
      <div className="col-md-4">
        <div className="map">
          <div id="map" style={{ width: "100%", height: " 37.4375rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Map;
