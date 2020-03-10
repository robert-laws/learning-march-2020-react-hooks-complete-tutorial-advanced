import React from 'react';
import { useCounter } from '../hooks/useCounter';

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(50, 100);

  return (
    <div>
      <h2>Count equals {count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterTwo
