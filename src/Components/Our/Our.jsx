import React from "react";
import styles from "./Our.module.css";

const Our = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.heading}>Our Team</h1>
      </div>
      <div className={styles.mainwrapper}>
        <div className={styles.block1}>
              <div className={styles.imgContainer1}></div>
              <div className={styles.subblock}>
                   <h3 className={styles.name}>Sanfole</h3>
                   <h4 className={styles.cases}>850 cases</h4>
              </div>
        </div>
        <div className={styles.block1}>
              <div className={styles.imgContainer2}></div>
              <div className={styles.subblock}>
                   <h3 className={styles.name}>Danial </h3>
                   <h4 className={styles.cases}>301 cases</h4>
              </div>
        </div>
        <div className={styles.block1}>
              <div className={styles.imgContainer3}></div>
              <div className={styles.subblock}>
                   <h3 className={styles.name}>Colleen</h3>
                   <h4 className={styles.cases}>180 cases</h4>
              </div>
        </div>
        <div className={styles.block1}>
              <div className={styles.imgContainer4}></div>
              <div className={styles.subblock}>
                   <h3 className={styles.name}>Cesforila</h3>
                   <h4 className={styles.cases}>470 cases</h4>
              </div>
        </div>
        <div className={styles.block1}>
              <div className={styles.imgContainer5}></div>
              <div className={styles.subblock}>
                   <h3 className={styles.name}>Haldone</h3>
                   <h4 className={styles.cases}>212 cases</h4>
              </div>
        </div>
        <div className={styles.block1}>
              <div className={styles.imgContainer6}></div>
              <div className={styles.subblock}>
                   <h3 className={styles.name}>Nik Jeo</h3>
                   <h4 className={styles.cases}>350 cases</h4>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
