import { useState, useEffect } from 'react';
import styles from './app.module.scss';

export function App() {
  const [ message, setMessage ] = useState('');
  useEffect(() => {
    fetch('/api').then(res => res.json()).then(result => {
      setMessage(result.message)
    })
  },[])
  return (
    <div className={styles.app}>
      <h1>{ message }</h1>
    </div>
  );
}

export default App;
