import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        className="color-white px-15px py-4px bg-[#096dd9] b-1px rounded-2px font-400 hover:bg-blue-4"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default Count;
