import { Fragment } from 'react';
import Feedbackitem from './components/Feedbackitem';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Feedbackitem />
      </div>
    </Fragment>
  );
}

export default App;
