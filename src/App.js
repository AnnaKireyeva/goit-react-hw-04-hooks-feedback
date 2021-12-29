import { useState } from 'react';

import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercent = 0;
    if (good !== 0) {
      positiveFeedbackPercent = Math.round((good / countTotalFeedback()) * 100);
    }
    return positiveFeedbackPercent;
  };

  let total = countTotalFeedback();
  let positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
