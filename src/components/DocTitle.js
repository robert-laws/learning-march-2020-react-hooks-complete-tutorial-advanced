import React, { useState } from 'react'
import { useDocument } from '../hooks/useDocument';

export const DocTitle = () => {
  const [count, setCount] = useState(0);
  useDocument(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  )
}
