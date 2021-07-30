import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import './styles.css';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option =>
    this.setState(() => {
      return {
        [option]: this.state[option] + 1,
      };
    });

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + bad + neutral;
    const positiveFeedBack = Math.round((good / countTotalFeedback) * 100);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positiveFeedBack={positiveFeedBack}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
