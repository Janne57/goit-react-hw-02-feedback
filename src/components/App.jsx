import { Component } from 'react';
import Section from '..//components/Section/Section.js';
import FeedbackOptions from '..//components/FeedbackOptions/FeedbackOptions.js';
import Statistics from '..//components/Statistics/Statistics.js';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };


  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };


  countPositiveFeedbackPercentage = () => {
    const total = this.state.bad + this.state.good + this.state.neutral;
    return Math.trunc((this.state.good / total) * 100);
  };

  
  render() {
    const options = Object.keys(this.state);
    console.log('options', options);
    const totalFeedback = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={['good', 'neutral', 'bad']}
            options={options}
            onLeaveFeedback={this.increment}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={feedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
