
import { useState } from "react";
import styles from './Feedback/feedback.module.css';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';

const App =()=> {

const [options, setOptions] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
})
// console.log(options)

const arrItems = Object.keys(options)
// console.log(arrItems)

const arrValues = Object.values(options);
// console.log(arrValues)

  const leaveFeedback = ev => {
    const counterStatItem = ev.target.name;
    // console.log(counterStatItem)
    setOptions(prevOptions => ({
      ...prevOptions,
      [counterStatItem]: prevOptions[counterStatItem] + 1
    }))
  };

  const countTotalFeedback = () =>{
    const totalStat = arrValues.reduce((total, value) => total + value, 0);
    return totalStat;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positiveFeedback = options.good;
    // console.log(positiveFeedback);
    return Number(((positiveFeedback / total) * 100).toFixed(2));
  }

  const nofeedback = () => {
    const positiveValues = arrValues.filter(value => value > 0);
    console.log(positiveValues);
    return positiveValues.length;
  }
  
    const totalStatistic = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
      <div className={styles.wrap}>
        <Section title="Please leave feedback">
          <div className={styles.blockBtn}>
            <FeedbackOptions
               items={arrItems}
              leaveFeedback={leaveFeedback}
            />
          </div>
        </Section>
        {nofeedback() ? (
          <Section title="Statistics">
            <Statistics
              items={arrItems} 
              options={options}
              total={totalStatistic}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  
}
export default App;
