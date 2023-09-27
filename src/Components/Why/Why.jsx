import React from 'react'
import styles from "./Why.module.css"
import Card from '../Card/Card'

const Why = () => {
  return (
     
    <div>
       <div className={styles.wrapper}>
        <h1 className={styles.heading}>Why Choose us?</h1>
       </div>
       <div className={styles.subwrapper}>
        <Card sucessRate="97"/>
        <Card sucessRate="100"/>
        <Card sucessRate="100"/>

       </div>
    </div>
  )
}

export default Why