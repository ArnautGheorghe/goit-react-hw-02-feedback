import Statistics from "./Statistics/Statistics";

export const App = () => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <br />

      <Statistics />
    </div>
  );
};
