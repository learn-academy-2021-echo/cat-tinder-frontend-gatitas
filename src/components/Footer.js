import React, { Component } from 'react';
import styles from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return(
      <footer className={styles.container}>
        <div className={styles.yearEstablished}>
            <span id={styles.year}>Salvador Antonio 2022</span>
        </div>
      </footer>
    )
  }
}
