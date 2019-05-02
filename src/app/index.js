import 'styles/root.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import styles from './index.css';
import Calc from './Calc';

export default () => (
  <ErrorBoundary>
    <main className={styles.wrapper}>
      <Calc />
    </main>
  </ErrorBoundary>
);
