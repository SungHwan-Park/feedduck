import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, 
  TableContainer,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Box,
  Button
 } from '@material-ui/core';

import { IFeed } from '@freshworks/shared';

import styles from './app.module.scss';
import { useHistory } from 'react-router-dom';

export function App() {

  const history = useHistory();
  const [ feeds, setFeeds ] = useState<IFeed[]>([]);

  useEffect(() => {
    axios.get('/api/feeds').then(result => {
      setFeeds(result.data)
    })
  },[])

  return (
    <div className={styles.app}>
      <h1>How people feed ducks!</h1>
      <Box display="flex" justifyContent="end" my={4}>
        <Button variant="outlined" onClick={() => history.push('/new')}>Submit New Feed</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>name</TableCell>
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
                <TableCell>{feed.name}</TableCell>
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
