import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../slices';

const mapStateToProps = (state) => {
  const { counter } = state;
  return { counterValue: counter };
};

const actionCreators = {
  incrementCounter: actions.incrementCounter,
  decrementCounter: actions.decrementCounter,
};

const Counter = (props) => {
  const increase = () => {
    const { incrementCounter } = props;
    incrementCounter();
  };
  const decrease = () => {
    const { decrementCounter } = props;
    decrementCounter();
  };

  const { counterValue } = props;

  return (
    <div>
      <h4>{counterValue}</h4>
      <div>
        <button className="btn btn-danger mx-2" onClick={decrease}>-</button>
        <button className="btn btn-success mx-2" onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Counter);
