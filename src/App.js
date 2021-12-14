import { Fragment } from 'react';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setfeedback] = useState(FeedbackData);
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </Fragment>
  );
}

export default App;
