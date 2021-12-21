import { Fragment } from 'react';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
//import Card from './components/shared/Card';

function App() {
  const [feedback, setfeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
  };

  const deleteFeedback = (id) => {
    if (window.confirm(`Are You Sure?`)) {
      setfeedback(feedback.filter((item) => id !== item.id));
    }
  };
  return (
    <Fragment>
      <Header />
      <FeedbackForm handleAdd={addFeedback} />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </Fragment>
  );
}

export default App;
