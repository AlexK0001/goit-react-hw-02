import { useState } from 'react'
import './App.css'
// import Feedback from '../Feedback/Feedback'
// import Options from '../Options/Options'

export default functiom App() {
  const [clicks, setClicks] = useState(0);
  const [values, setValues] = useState({
    good: 0,
	  neutral: 0,
	  bad: 0
  });

  const updateValues = () => {
    setValues({
      ...values,
      setValues: (values + 1),
    });
  };
  // const udpateValues = () => {
  //   setValues(values + 1);
  // };

  const udpateClicks = () => {
    setClicks(clicks + 1);
  };

  const resetClicks = () => {
    setClicks(0);
  };
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.
      </p>
      <Options>
      <button onClick={udpateClicks}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      {/* <button></button> */}
      </Options>
      <Feedback>

      </Feedback>
    </div>
  )
}
