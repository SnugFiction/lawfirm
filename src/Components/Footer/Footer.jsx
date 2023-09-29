import React from 'react'
import styles from "./Footer.module.css"
import {ReactComponent as Logo} from "./../../Assets/logo.svg"
import Socialmedia from './Socialmedia'
import Footernav from './Footernav'
import Footercopyright from './Footercopyright'


const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.subwrapper}>
            <Logo/>
            <Footernav/>
            <Socialmedia/>
        </div>
        <div>
            <Footercopyright/>
        </div>
    </div>
  )
}

export default Footer