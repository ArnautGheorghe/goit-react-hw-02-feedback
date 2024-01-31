
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";


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