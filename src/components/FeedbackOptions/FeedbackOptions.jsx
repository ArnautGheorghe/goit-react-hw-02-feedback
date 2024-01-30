import styles from "./FeedbackOptions.modules.css";
import { React, useState, setState } from 'react';
import PropTypes from 'prop-types';
import Statistics from "components/Statistics/Statistics";
import Notifications from "components/Notifications/Notifications";



const FeedbackOptions = ({ state }) => {
    

      const [counter, setCounter] = useState(state.good);

      //increase counter
      const increase = () => {
        setCounter(count => count + 1);
    };
    
const [counterneutral, setCounterneutral] = useState(state.neutral);

//increase counter
const increaseneutral = () => {
  setCounterneutral(count => count + 1);
};

const [counterbad, setCounterbad] = useState(state.bad);

//increase counter
const increasebad = () => {
  setCounterbad(count => count + 1);
};

   
    const state2 = {
        good: counter,
        bad: counterbad,
        neutral:counterneutral
    }
       

  


  return (
    <div>
      <button type="button" onClick={increase}>
        Good
      </button>
      <button type="button" onClick={increaseneutral}>
        Neutral
      </button>
      <button type="button" onClick={increasebad}>
        Bad
      </button>
      <br />
      {state2.good !== 0 || state2.neutral !== 0 || state2.bad !== 0 ? (
        <Statistics
          good={state2.good}
          neutral={state2.neutral}
          bad={state2.bad}
          total={state2.good + state2.neutral + state2.bad}
          positivePercentage={(
            (state2.good * 100) /
            (state2.good + state2.neutral + state2.bad)
          ).toFixed()}
        />
      ) : (
        <Notifications message="There is no feedback" />
      )}
    </div>
  );
};



export default FeedbackOptions;
