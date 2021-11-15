import React, { useState } from "react";
import { favouriteMenu, closeMenu } from "../Main/Icons";
import JokeCard from "../JokeCard/JokeCard";

export default function BurgerMenu({
  styles,
  stylesFavourite,
  favourite,
  handleOnClickRemove,
}) {
  const [statusBurgerMenu, setStatusBurgerMenu] = useState("unActive");

  function burgerMenuChangeStatus() {
    if (statusBurgerMenu === "unActive") {
      setStatusBurgerMenu("active");
    } else setStatusBurgerMenu("unActive");
  }
  function storageButtonRemove() {
    handleOnClickRemove(favourite);
  }
  return (
    <div>
      <span
        className={styles.icon_favourite_menu}
        onClick={() => burgerMenuChangeStatus()}
      >
        {statusBurgerMenu === 'active' ? closeMenu : favouriteMenu}
        <h1>Favourite</h1>
      </span>
      <div
        className={
          statusBurgerMenu === "active" ? styles.main_sec_bg_active : null
        }
      ></div>
      <div
        className={
          statusBurgerMenu === "active"
            ? stylesFavourite.media_favourite_block_active
            : stylesFavourite.media_favourite_block
        }
      >
        <JokeCard
          joke={favourite}
          styles={stylesFavourite}
          storageButtons={storageButtonRemove}
        />
      </div>
    </div>
  );
}
