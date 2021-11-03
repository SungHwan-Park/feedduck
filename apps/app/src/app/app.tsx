import { useState, useEffect } from 'react';

import { IFeed } from '@freshworks/shared';

import styles from './app.module.scss';

export function App() {
  const [ message, setMessage ] = useState<IFeed>();
  useEffect(() => {
    fetch('/api/feeds').then(res => res.json()).then(result => {
      setMessage(result)
    })
  },[])
  return (
    <div className={styles.app}>
      <h1>How people feed ducks!</h1>
      <div>{ JSON.stringify(message) }</div>
    </div>
  );
}

export default App;
