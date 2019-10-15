import React from 'react';
import T from 'prop-types';
import styles from './friends.module.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, isOnline, name }) => (
  <li className="item">
    <span className={isOnline ? styles.online : styles.status}></span>
    <img className="avatar" src={avatar} alt="friend's avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: T.string.isRequired,
  isOnline: T.bool.isRequired,
  name: T.string.isRequired,
};

export default FriendList;
