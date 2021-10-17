import { useState } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => good + neutral + bad;

  const countPositivePercentage = () => Math.round((good / countTotal()) * 100);

  const handleAddFeedback = feedbackValue => {
    const stateName = feedbackValue.toLowerCase();
    switch (stateName) {
      case 'good':
        setGood(count => count + 1);
        return;
      case 'neutral':
        setNeutral(count => count + 1);
        return;
      case 'bad':
        setBad(count => count + 1);
        return;
      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <p className={s.infoText}>No feedback given</p>
        )}
      </Section>
    </div>
  );
}
