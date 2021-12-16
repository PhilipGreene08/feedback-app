import { Fragment } from 'react';
import { useState } from 'react';

import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
//import Card from './components/shared/Card';

function App() {
  const [feedback, setfeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm(`Are You Sure?`)) {
      setfeedback(feedback.filter((item) => id !== item.id));
    }
  };
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </Fragment>
  );
}

export default App;
