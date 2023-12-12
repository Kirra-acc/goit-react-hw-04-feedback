import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <div className={s.statWrapper}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback(good, neutral, bad)}</p>
        <p>
          Positive Feedback:{' '}
          {countPositiveFeedbackPercentage(good, neutral, bad)}%
        </p>
      </div>
    </>
  );
};
