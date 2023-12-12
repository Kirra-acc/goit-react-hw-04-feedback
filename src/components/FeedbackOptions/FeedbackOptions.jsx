import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ addFb }) => {
  return (
    <>
      <div className={s.feedbackWrapper}>
        <div className={s.feedbackButtons}>
          <button className="feedback" name="good" onClick={addFb}>
            Good
          </button>
          <button className="feedback" name="neutral" onClick={addFb}>
            Neutral
          </button>
          <button className="feedback" name="bad" onClick={addFb}>
            Bad
          </button>
        </div>
      </div>
    </>
  );
};
