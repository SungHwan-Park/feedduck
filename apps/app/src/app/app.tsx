import { useState, useEffect } from 'react';

import { IFeed } from '@freshworks/shared';

import styles from './app.module.scss';

export function App() {
  const [ message, setMessage ] = useState<IFeed>();
  useEffect(() => {
    fetch('/api').then(res => res.json()).then(result => {
      setMessage(result)
    })
  },[])
  return (
    <div className={styles.app}>
      <h1>{ JSON.stringify(message) }</h1>
    </div>
  );
}

export default App;
