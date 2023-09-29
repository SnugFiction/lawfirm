import React from 'react'
import styles from "./Footer.module.css"
import { ReactComponent as One } from './../../Assets/one.svg'
import { ReactComponent as Two } from './../../Assets/two.svg'
import { ReactComponent as Three } from './../../Assets/three.svg'
import { ReactComponent as Four } from './../../Assets/four.svg'


const Socialmedia = () => {
  return (
    <div className={styles.social}>
        <One className={styles.socialmedia}/>
        <Two className={styles.socialmedia}/>
        <Three className={styles.socialmedia}/>
        <Four/>
    </div>
  )
}

export default Socialmedia