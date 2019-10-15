import React from 'react';
import Profile from '../Profile';
import user from '../database/user.json';
import Stats from '../Stats';
import stats from '../database/stats';
import FriendList from '../FriendList';
import friends from '../database/friends.json';
import TransactionHystory from '../TransactionHistory';
import transactions from '../database/transactions.json';
import styles from './app.module.css';

const App = () => (
  <div className={styles.app}>
    <Profile {...user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHystory items={transactions} />
  </div>
);

export default App;
