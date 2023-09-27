import React from 'react'
import styles from "./Navbar.module.css"

const Nabar = () => {
  return (
        <ul className={styles.nav}>
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Areas</li>
            <li>About Us</li>
        </ul>
  )
}

export default Nabar