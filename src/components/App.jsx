import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notification/Notification.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFb = event => {
    const type = event.target.name;
    if (type === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (type === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (type === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (total > 0 ? (good / total) * 100 : 0).toFixed();
  };

  const totalFb = countTotalFeedback;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions addFb={addFb} />
      </Section>

      {totalFb() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
