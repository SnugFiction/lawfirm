import React from "react";
import styles from "./Rightourself.module.css"
import {ReactComponent as LineIcon} from './../../Assets/line.svg'

const Rightourself = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <LineIcon/>
      </div>
      <div className={styles.subheading}>
      <h2>Criminal Lawyer</h2>
      <p className={styles.para}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exercitation.
      </p>
      </div>
    </div>
  );
};

export default Rightourself;
