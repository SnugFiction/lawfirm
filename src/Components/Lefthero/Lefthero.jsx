import React from "react";
import styles from "./Lefthero.module.css";
import { ReactComponent as MeassgaeIcon } from "../../Assets/meassge.svg";

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
      <div className={styles.enteremailbtn}>
        <div className={styles.subwrapper}>
          <MeassgaeIcon style={{opacity:"30%",paddingLeft:"26px", paddingTop:"26px", marginRight:"12px"}}/>
          <input type="text" className={styles.emailinput} placeholder="Enter your email address" />
        </div>
        <div className={styles.letsTalkBtn}>
          <button>Lets talk</button>
        </div>
      </div>
    </div>
  );
};

export default lefthero;
