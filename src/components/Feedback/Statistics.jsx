import styles from './feedback.module.css';

const Statistics = ({ items, options, total, positiveFeedbackPercentage }) => {
  // console.log(options);
  // console.log(items)

  return (
    <ul className={styles.statisticsList}>
      {items.map(item => (
        <li className={styles.item} key={item}>
          {item}: {options[item]}
        </li>
      ))}
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>
        Positive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

export default Statistics;