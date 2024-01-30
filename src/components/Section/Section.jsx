import styles from "./Section.modules.css"
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notifications from "components/Notifications/Notifications";

const Section = ({title}) => {
    const state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return (
      <div>
        <h2>{title}</h2>
        <FeedbackOptions
          state={state}
        />

        
      </div>
    );
}

export default Section;