import React from 'react';
import T from 'prop-types';
import styles from './stats.module.css';
import styledComponents from 'styled-components';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StyledLi = styledComponents.li`
  padding: 20px 0;
  border: 1px solid rgb(200, 200, 200);
  flex: 1 1 auto;
  color: white;
  background-color: ${getRandomColor}
`;

const Stats = ({ title, stats }) => (
  <section className={styles.statssection}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <StyledLi key={stat.id}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </StyledLi>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
