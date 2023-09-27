import React from "react";
import Leftourself from "../Leftourself/Leftourself";
import Rightourself from "../Rightourself/Rightourself";
import styles from "./Ourself.module.css";

const Ourself = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subwrapper}>
        <Leftourself />
      </div>
      <div className={styles.subwrapper}>
        <Rightourself />
      </div>
    </div>
  );
};
export default Ourself;
