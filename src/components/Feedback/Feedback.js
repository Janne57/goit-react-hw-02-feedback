// import PropTypes  from 'prop-types';
import { Component } from 'react';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  // increment = () => {
  //     this.setState(prevState => ({
  //         good: prevState + 1
  //         // neutral: prevState + 1,
  //         // bad: prevState + 1,
  //     }));
  // };

  incrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        // total: prevState.bad + prevState.good + prevState.neutral
        total: this.countTotalFeedback,
      };
    });
  };

  incrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        // total: prevState.bad + prevState.good + prevState.neutral
        total: this.countTotalFeedback,
      };
    });
  };

  incrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        // total: prevState.bad + prevState.good + prevState.neutral}
        total: this.countTotalFeedback,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.bad + prevState.good + prevState.neutral,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage: prevState.good / prevState.bad * 100,
      };
    });
  };


  render() {
    const { title } = this.props;

    return (
      <div className="Counter">
        <div className="Counter__controls">
          <h1>{title}</h1>
          <button type="button" onClick={this.incrementGood}>
            Good
          </button>
          <button type="button" onClick={this.incrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.incrementBad}>
            Bad
          </button>
        </div>
        <span className="Counter__stat">Statistics</span>
        <ul>
          <li className="Counter__stat__item">
            <span className="">Good: </span>
            <span className="">{this.state.good}</span>
          </li>
          <li className="Counter__stat__item">
            <span className="">Neutral: </span>
            <span className="">{this.state.neutral}</span>
          </li>
          <li className="Counter__stat__item">
            <span className="">Bad: </span>
            <span className="">{this.state.bad}</span>
          </li>
          <li className="Counter__stat__item">
            <span className="">Total: </span>
            {/* <span className=''>{this.state.bad + this.state.good + this.state.neutral}</span> */}
            <span className="">{this.state.total}</span>
          </li>
          <li className="Counter__stat__item">
            <span className="">Positive feedback: </span>
            {/* <span className=''>{this.state.bad + this.state.good + this.state.neutral}</span> */}
            <span className="">{this.state.positivePercentage} %</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;

