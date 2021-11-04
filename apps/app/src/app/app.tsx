import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, 
  TableContainer,
  TableCell,
  TableBody,
  TableHead,
  TableRow
 } from '@material-ui/core';

import { IFeed } from '@freshworks/shared';

import styles from './app.module.scss';

export function App() {
  const [ feeds, setFeeds ] = useState<IFeed[]>([]);
  useEffect(() => {
    axios.get('/api/feeds').then(result => {
      setFeeds(result.data)
    })
  },[])
  return (
    <div className={styles.app}>
      <h1>How people feed ducks!</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Farmer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Food</TableCell>
              <TableCell>Place</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeds.map(feed => (
              <TableRow key={feed.id}>
                <TableCell>{feed.id}</TableCell>
                <TableCell>{feed.farmer}</TableCell>
                <TableCell>{feed.date}</TableCell>
                <TableCell>{feed.count}</TableCell>
                <TableCell>{feed.quantity}</TableCell>
                <TableCell>{feed.food}</TableCell>
                <TableCell>{feed.place}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
