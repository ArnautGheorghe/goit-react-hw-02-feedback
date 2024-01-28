import styles from './Statistics.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ comp, title, stats }) => {
    const state = {
    
  good: 3,
  neutral: 2,
  bad: 2,

    }
    

  return (
    <div className={styles.black}>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {state.good}</li>
        <li>Neutral:{state.neutral}</li>
        <li>Bad:{state.bad}</li>
        <li>Total:{state.good + state.neutral + state.bad}</li>
        <li>
          Positive feedback:
          {((state.good * 100) / (state.good + state.neutral + state.bad)).toFixed()} %
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  comp: PropTypes.bool,
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
