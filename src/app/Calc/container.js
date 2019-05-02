import React from 'react';
import _ from 'lodash';

const solve = (a, b) => ({
  '+': a + b,
  '-': a - b,
  '*': a * b,
  '/': a / b,
});

const hydrate = {
  operation: '+',
  unsetValue: undefined,
  value: 0,
};

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.appendUnset = this.appendUnset.bind(this);
      this.clear = this.clear.bind(this);
      this.compute = this.compute.bind(this);
      this.decimal = this.decimal.bind(this);
      this.negate = this.negate.bind(this);
      this.setOperation = this.setOperation.bind(this);
      // Initial State
      this.state = hydrate;
    }
    setOperation(operation) {
      if (this.state.unsetValue) this.compute();
      this.setState({ operation });
    }
    appendUnset(numb) {
      const { unsetValue } = this.state;
      this.setState({
        unsetValue: (unsetValue || 0) + _.toString(numb),
      });
    }
    clear() {
      this.setState(hydrate);
    }
    compute() {
      const { operation, unsetValue, value } = this.state;
      if (operation) {
        this.setState({
          operation: undefined,
          unsetValue: undefined,
          value: solve(_.toFinite(value), _.toFinite(unsetValue))[operation],
        });
      }
    }
    decimal() {
      const val = this.state.unsetValue;
      if (!val || (_.indexOf([...val], '.') == -1)) this.appendUnset('.');
    }
    negate() {
      const val = this.state.unsetValue;
      if (val) {
        this.setState({
          unsetValue: _.startsWith(val, '-') ? val.substring(1) : `-${val}`,
        });
      }
    }
    render() {
      return (
        <Component
          {...this.state}
          appendUnset={this.appendUnset}
          clear={this.clear}
          compute={this.compute}
          decimal={this.decimal}
          negate={this.negate}
          setOperation={this.setOperation}
        />
      );
    }
  }
);
