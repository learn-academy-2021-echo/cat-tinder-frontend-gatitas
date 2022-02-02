import React, { Component } from 'react';
import styles from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return( <div>
      <footer className={styles.container}>
        <div className={styles.yearEstablished}>
            <span id={styles.year}>2021 Established</span>
        </div>
      </footer >
    </div>
    )
  }
}

