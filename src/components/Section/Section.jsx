import styles from "./Section.modules.css"
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notifications from "components/Notifications/Notifications";

const Section = ({title}) => {
    const state = {
      good: 3,
      neutral: 2,
      bad: 2,
    };
    return (
      <div>
        <h2>{title}</h2>
            <FeedbackOptions />
            
        {(state.good !== 0 ||
          state.neutral !== 0 ||
                (state.bad !== 0)
          
                ? <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={state.good + state.neutral + state.bad}
          positivePercentage={(
            (state.good * 100) /
            (state.good + state.neutral + state.bad)
          ).toFixed()}
                />
                
                : <Notifications message="There is no feedback" />)}
        
      </div>
    );
}

export default Section;