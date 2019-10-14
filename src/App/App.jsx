import React from 'react';
import Profile from '../Profile';
import Stats from '../Stats';
import user from '../database/user.json';
import stats from '../database/stats';
import friends from '../database/friends.json';

const App = () => (
  <div className="App">
    <Profile {...user} />
    <Stats title="Upload stats" stats={stats} />
  </div>
);

export default App;
