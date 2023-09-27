import React from 'react'
import {ReactComponent as HeroImg} from "./../../Assets/heroImg.svg"
import styles from "./Right.module.css"

const Righthero = () => {
  return (
    <div className={styles.wrapper}>
      <HeroImg/>
    </div>
  )
}

export default Righthero