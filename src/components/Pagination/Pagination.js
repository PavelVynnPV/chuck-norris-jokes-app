import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

function Pagination({ pages = 5, setCurrentPage }) {
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  // Array of buttons what we see on the page

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className={styles.pagination_container}>
      <button
        className={styles.page_link}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        &#8656; Prev
      </button>
      <button
        className={styles.page_link}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        Next &#8658;
      </button>
    </div>
  );
}

export default Pagination;
