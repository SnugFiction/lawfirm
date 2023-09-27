import React from 'react'
import styles from "./Header.module.css"

const HeaderContactUs = () => {
  return (
    <div>
        <form action="submit">
            <button className={styles.contactUsbtn}>Contact Now</button>
        </form>
    </div>
  )
}

export default HeaderContactUs