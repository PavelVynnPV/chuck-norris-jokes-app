import Icons, { fillHeart, Heart, Link } from "../Main/Icons";
import React from "react";

function JokeCard({ joke, isFavourite, styles, storageButtons }) {
  return (
    <>
      <div className={styles.joke_block}>
        <div className={styles.jokes_content}>
          <span className={styles.icon_mess}>{Icons}</span>
          <div className={styles.jokes_block}>
            <div>
              <span className={styles.id_joke}>
                ID:{" "}
                <a href={joke.url}>
                  {joke.id}
                  <span>{Link}</span>
                </a>
              </span>
              <span
                className={styles.icon_heart}
                onClick={() => storageButtons(joke)}
              >
                {isFavourite === false ? Heart : fillHeart}
              </span>
            </div>
            <p>{joke.value}</p>
            <div className={styles.updateNCategory}>
              <span className={styles.update_joke}>
                Last updated: {joke.updated_at}
              </span>

              <span
                className={
                  joke.categories === undefined
                    ? null
                    : joke.categories.length === 1
                    ? styles.categories
                    : null
                }
              >
                {joke.categories}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JokeCard;
