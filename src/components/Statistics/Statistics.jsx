import styles from './Statistics.modules.css';

import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  

  return (
    <div className={styles.black}>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>
          Positive feedback:
                  {positivePercentage}
          %
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
