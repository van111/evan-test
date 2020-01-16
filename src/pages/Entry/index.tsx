import * as React from 'react';
import Reverse from './components/reverse';
import Fibonacci from './components/fibonacci';
import Sort from './components/sort';
import Combination from './components/combination';
import Recurring from './components/recurring';

const Entry: React.FunctionComponent = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h6 className="title">Reverse</h6>
          <Reverse />
        </div>
        <div className="box">
          <h6 className="title">Fibonacci</h6>
          <Fibonacci />
        </div>
        <div className="box">
          <h6 className="title">Sort Array</h6>
          <Sort />
        </div>
        <div className="box">
          <h6 className="title">Recurring Letter</h6>
          <Recurring />
        </div>
        <div className="box">
          <h6 className="title">Sum of 8</h6>
          <Combination />
        </div>
      </div>
    </div>
  )
}

export default Entry