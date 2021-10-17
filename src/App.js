import { Component } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import s from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal() {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc = acc + value);
    }, 0);
  }

  countPositivePercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotal()) * 100);
  }

  handleAddFeedback = feedbackValue => {
    const stateName = feedbackValue.toLowerCase();
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotal() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage()}
            />
          ) : (
            <p className={s.infoText}>No feedback given</p>
          )}
        </Section>
      </div>
    );
  }
}
