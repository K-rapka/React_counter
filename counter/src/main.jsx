import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import styles from './main.module.css'

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className={styles.main}>
      <div>Count: {count}</div>
      <button className={styles.btnG} onClick={() => setCount(count + 1)}>+</button>
      <button className={styles.btnR} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Counter initialCount={0}/>)