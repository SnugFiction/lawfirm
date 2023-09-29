import React from 'react'
import styles from "./Footer.module.css"

const Footernav = () => {
  return (
    <div>
        <ul className={styles.navbar}>
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Areas</li>
            <li>About Us</li>
        </ul>
    </div>
  )
}

export default Footernav