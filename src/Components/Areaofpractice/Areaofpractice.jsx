import React from "react";
import styles from "./Areaofpractice.module.css";

const Areaofpractice = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Area of Practices</h1>
      </div>
      <div className={styles.subwrapper}>
        <div className={styles.showimages}>
          <div className={styles.one}>
            <h3 className={styles.subheading}>BUSINESS LAW</h3>
          </div>
          <div className={styles.two}>
          <h3 className={styles.subheading}>Partnership LAW</h3>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.three}>
            <h3 className={styles.subheading}>REAL ESTATE LAW</h3>
          </div>
          <div className={styles.four}>
          <h3 className={styles.subheading}>BUSINESS LAW</h3>
          </div>
        </div>


        <div className={styles.section2}>
          <div className={styles.five}>
            <h3 className={styles.subheading}>LANDLORD DISPUTES</h3>
          </div>
          <div className={styles.six}>
          <h3 className={styles.subheading}>ELDER ABUSE</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Areaofpractice;


