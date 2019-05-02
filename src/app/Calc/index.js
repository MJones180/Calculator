import React from 'react';
import Button from './Button';
import Output from './Output';
import Container from './container';
import styles from './index.css';

export default Container(({ appendUnset, clear, compute, decimal, negate, setOperation, unsetValue, value }) => (
  <div className={styles.wrapper}>
    <div className={styles.backdrop} />
    <div className={styles.container}>
      <Output value={unsetValue || value} />
      <div className={styles.row}>
        <Button onClick={clear}> C </Button>
        <Button onClick={negate}> +/- </Button>
        <Button onClick={decimal}> . </Button>
        <Button onClick={() => setOperation('/')}> / </Button>
      </div>
      <div className={styles.row}>
        <Button onClick={() => appendUnset(7)}> 7 </Button>
        <Button onClick={() => appendUnset(8)}> 8 </Button>
        <Button onClick={() => appendUnset(9)}> 9 </Button>
        <Button onClick={() => setOperation('*')}> * </Button>
      </div>
      <div className={styles.row}>
        <Button onClick={() => appendUnset(4)}> 4 </Button>
        <Button onClick={() => appendUnset(5)}> 5 </Button>
        <Button onClick={() => appendUnset(6)}> 6 </Button>
        <Button onClick={() => setOperation('-')}> - </Button>
      </div>
      <div className={styles.row}>
        <Button onClick={() => appendUnset(1)}> 1 </Button>
        <Button onClick={() => appendUnset(2)}> 2 </Button>
        <Button onClick={() => appendUnset(3)}> 3 </Button>
        <Button onClick={() => setOperation('+')}> + </Button>
      </div>
      <div className={styles.row}>
        <Button onClick={() => appendUnset(0)} zero> 0 </Button>
        <Button onClick={compute}> = </Button>
      </div>
    </div>
  </div>
));
