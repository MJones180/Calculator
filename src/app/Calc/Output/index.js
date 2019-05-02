import React from 'react';
import _ from 'lodash';
import numeral from 'numeral';
import styles from './index.css';

export default ({ value }) => (
  <div className={styles.box}>
    <h1 className={styles.val}>
      {numeral(value).format('0,0.[000000]')}
      {_.endsWith(value, '.') && '.'}
    </h1>
  </div>
);
