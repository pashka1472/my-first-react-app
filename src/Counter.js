import { useState } from 'react';

function Counter({ label, step }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + step);
  }

  return (
    <div style={{ margin: '20px' }}>
      <p>{label} count: {count}</p>
      <button onClick={handleClick}>
        {step > 0 ? 'Increase' : 'Decrease'}
      </button>
    </div>
  );
}

export default Counter;
    