import React from 'react';
import styles from './index.css';

export default ({ children, onClick, zero }) => (
  <div className={`${styles.button} ${zero && styles.zero}`} onClick={onClick}>
    {children}
  </div>
);
