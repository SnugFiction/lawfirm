import React from "react";
import styles from "./Faq.module.css";
import BasicAccordion from "./Accordian";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>FAQ</h1>

      <div className={styles.subwrapper}>
        <div className={styles.block}>
          <p className={styles.para}>
            Amet minim mollit non deserunt ullamco est sit
            <br />
            aliqua dolor do amet sint.{" "}
          </p>
        </div>
        <div className={styles.block}>
          <h1 className={styles.subheading}>
            Do I need a personal injury report?
          </h1>
          <p className={styles.para2}>
            Amet minim mollit non deserunt ullamco est sit <br />aliqua dolor do amet
            sint. Velit officia consequatduis <br /> enim velit mollit Exer. Amet minim
            mollit non deserunt <br /> ullamco est sit aliqua dolor do amet sint. Velit
            officia <br />consequatduis enim velit mollit Exer.
          </p>
          <BasicAccordion/>
        </div>
      </div>
    </div>
  );
};

export default Faq;
