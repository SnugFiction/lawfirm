import React from 'react'
import styles from "./Newslatter.module.css"

const Newslatter = () => {
  return (
    <div className={styles.wrapper}>
              <h1 className={styles.heading}>Subscribe Our Newsletter</h1>
              <div className={styles.btnwrappers}>
                    <input type="text" className={styles.name} placeholder='Name'/>
                    <input type="text" className={styles.email} placeholder='Enter your email'/>
                    <button className={styles.send}>Send</button>
              </div>
    </div>
  )
}

export default Newslatter