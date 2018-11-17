import React from 'react';
import Counter from './counter';

const Counters = ({ onReset, counters, onDelete, onIncrement, onDecrement }) => {
  return (  
    <div>
      <button 
        onClick={onReset}
        className="btn btn-primary m-2"
      >Reset</button>
      {
        counters.map(counter => 
          <Counter 
            key={counter.id }
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
      )}
    </div>
  );
}

export default Counters;