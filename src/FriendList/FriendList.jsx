import React from 'react';
import T from 'prop-types';
import styles from './friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, isOnline, name }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.status}></span>
    <img
      className={styles.avatar}
      src={avatar}
      alt="friend's avatar"
      width="100"
    />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: T.string.isRequired,
  isOnline: T.bool.isRequired,
  name: T.string.isRequired,
};

export default FriendList;
