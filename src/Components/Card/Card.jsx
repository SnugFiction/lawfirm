import React from 'react'
import styles from "./Card.module.css"
import {ReactComponent as Gift} from "./../../Assets/gift.svg"

const Card = ({sucessRate}) => {
  return (
    <div className={styles.wrapper}>
        <Gift style={{marginTop:"28px"}}/>
        <h1 className={styles.heading}>{sucessRate}% Success Rate</h1>
        <p className={styles.para}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
     <button className={styles.btnread}>Read More</button>
    </div>
  )
}

export default Card