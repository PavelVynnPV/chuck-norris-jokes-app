////JOKES RENDER + CATEGORIES

export const handleRandomJokeAdd = (checkedRadio, setCurrentPage, setJokes, search, setErrorSearch, categorie) => {
    if (checkedRadio === "random") {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => setJokes([data]))
        .catch((err) => console.log(err));
      setCurrentPage(1);
    }
    if (checkedRadio === "categorie") {
      fetch(`https://api.chucknorris.io/jokes/random?category=${categorie}`)
        .then((res) => res.json())
        .then((data) => setJokes([data]))
        .catch((err) => console.log(err));
      setCurrentPage(1);
    }
    if (checkedRadio === "search") {
      if (search.length >= 3) {
        fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
          .then((res) => res.json())
          .then((data) => setJokes(data.result))
          .catch((err) => console.log(err));
        setErrorSearch(null);
      } else setErrorSearch("You need 3 letters for search");
    }
  };

  export const fetchCategories = (setCategories) => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }

  ///LOCALSTORAGE

  export function handleAddToLocalStorage(joke, favourites, setFavourites) {
    const newFavouriteList = [...favourites, joke];
    const saveToLocalStorage = (joke) => {
      localStorage.setItem("joke-to-favourite", JSON.stringify(joke));
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  export function handleOnClickRemove(joke, favourites, setFavourites) {
    const newFavouriteList = favourites.filter((favourite) => {
      return favourite.id !== joke.id;
    });
    const saveToLocalStorage = (joke) => {
      localStorage.setItem("joke-to-favourite", JSON.stringify(joke));
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
  