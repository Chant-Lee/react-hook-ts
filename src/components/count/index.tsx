
import React, { useState } from "react";

import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button className='counter-btn' onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;