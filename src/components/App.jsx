import Notifications from "./Notifications/Notifications.jsx";
import Section from "./Section/Section.jsx";

export const App = () => {


  return (
    <div>
      <Section title="Please leave feedback" />
      <Notifications message="There is no feedback" />
    </div>
  );
};
