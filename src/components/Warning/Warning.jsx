import React from 'react'
import styles from './Warning.module.css'
const Warning = () => {
  return (
    <div className={`${styles.warning}`}>
      <p>You haven't selected any number</p>
    </div>
  )
}

export default Warning;