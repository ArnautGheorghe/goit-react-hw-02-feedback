import styles from "./Section.modules.css"
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";

const Section = ({title}) => {
    const state = {
      good: 5,
      neutral: 2,
      bad: 2,
    };
    return (
        <div>
            <h2>{title}</h2>
        <FeedbackOptions />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={state.good + state.neutral + state.bad}
          positivePercentage={(
            (state.good * 100) /
            (state.good + state.neutral + state.bad)
          ).toFixed()}
        />
      </div>
    );
}

export default Section;