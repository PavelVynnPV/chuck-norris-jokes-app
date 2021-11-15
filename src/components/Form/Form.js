import React, { useState } from "react";
import styles from "../Main/Main.module.css";
import { CategorieBtn } from "../JokeCard";
import { handleRandomJokeAdd } from "../Main/helpers";

export default function Form({
  categories,
  currentJokes,
  setJokes,
  setCurrentPage,
}) {
  const [checkedRadio, setCheckedRadio] = useState();
  const [categorie, setCategorie] = useState("");
  const [search, setSearch] = useState("");
  const [errorSearch, setErrorSearch] = useState("");

  return (
    <div>
      <form className={styles.checkbox_block}>
        <label>
          <input
            type="radio"
            name="name1"
            onChange={() => setCheckedRadio("random")}
          />
          Random
        </label>

        <label>
          <input
            type="radio"
            name="name1"
            onChange={() => setCheckedRadio("categorie")}
          />
          From categories
        </label>

        <div
          className={
            checkedRadio === "categorie"
              ? styles.categorie_btns_block
              : styles.unActive
          }
        >
          {categories.map((categorie) => (
            <CategorieBtn
              categorie={categorie}
              setCategorie={setCategorie}
              categories={categories}
            />
          ))}
        </div>

        <label>
          <input
            type="radio"
            name="name1"
            onChange={() => setCheckedRadio("search")}
          />
          Search
        </label>

        {checkedRadio === "search" ? (
          <>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Free text search..."
              onChange={(event) => setSearch(event.target.value)}
            />
            <p className={styles.errorSearch}>{errorSearch}</p>
            <h1
              className={
                currentJokes.length === 0 ? styles.active : styles.unActive
              }
            >
              Nothing is here &#129488;
            </h1>
          </>
        ) : null}

        <input
          type="submit"
          className={styles.getJoke_btn}
          onClick={(event) => {
            event.preventDefault();
            handleRandomJokeAdd(
              checkedRadio,
              setCurrentPage,
              setJokes,
              search,
              setErrorSearch,
              categorie
            );
          }}
          value="Get a joke"
        />
      </form>
    </div>
  );
}
