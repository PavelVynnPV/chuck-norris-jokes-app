import React from "react";
import styles from "../Main/Main.module.css";

function CategorieBtns({ categorie, setCategorie }) {
  return (
    <>
      <div className={styles.btn_categories}>
        <label key={categorie}>
          <input
            className={styles.unActive}
            type="radio"
            name="name2"
            value={categorie}
            onClick={() => setCategorie(categorie)}
          />
          <span className={styles.active_categorie_btn}>{categorie}</span>
        </label>
      </div>
    </>
  );
}

export default CategorieBtns;
