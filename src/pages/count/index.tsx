import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
    </div>
  );
}

export default Count;
