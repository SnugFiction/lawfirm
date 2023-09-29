import React from 'react'
import styles from "./Footer.module.css"

const Footercopyright = () => {
  return (
    <div className={styles.copyrightwrapper}>
        <ul className={styles.copyright}>
            <li>© 2020 Acme. All right reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
        </ul>
    </div>
  )
}

export default Footercopyright