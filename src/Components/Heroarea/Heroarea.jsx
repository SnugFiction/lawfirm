import React from "react";
import styles from "./Heroarea.module.css";
import Righthero from "../Righthero/Righthero";
import Lefthero from "../Lefthero/Lefthero";

const Heroarea = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.split}>
        <Lefthero />
      </div>
      <div className={styles.split}>
        <Righthero />
      </div>
    </div>
  );
};

export default Heroarea;
