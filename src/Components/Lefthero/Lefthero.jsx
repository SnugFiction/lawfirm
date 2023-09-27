import React from "react";
import styles from "./Lefthero.module.css";

const lefthero = () => {
  return (
    <div className="wrapper">
      <div className={styles.herotext}>
        <h1 className={styles.herotextsmall}>You don’t have to</h1>
        <h1 className={styles.herotextBig}>Fight them Alone</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
        hac massa gravida arcu interdum proin curae.
      </p>
      
    </div>
  );
};

export default lefthero;
