import React, {useState} from 'react';

function Counter() {
  
  // Set up a REACT state variable manipulated by the useState hook
  const [count, setCount] = useState(0);

  // 3 virtual functions to manipulate the count 
  const decrement = () => { setCount(count - 1);} 
  const reset = () => { setCount(0); }
  const increment = () => {
    // Call the react setCount method to update count and propagate to the Dom:
    setCount(count + 1);
  }

  return( 
    <React.Fragment>
     <div className="counter-container"> 
       <p className="count-display">{count}</p>
       <button className="counter-button" onClick={decrement}>Decrement</button>
       <button className="counter-button" onClick={reset}>Reset</button>
       <button className="counter-button" onClick={increment}>Increment</button>
     </div>
     </React.Fragment>);   
}

export default Counter