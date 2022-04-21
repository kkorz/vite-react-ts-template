import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        className="
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        text-white
        bg-green-500
        hover:bg-green-700
        border-none
        cursor-pointer
      "
        onClick={() => setCount((count) => count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default Count;
