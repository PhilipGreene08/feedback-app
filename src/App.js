import { Fragment } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

//import Card from './components/shared/Card';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Fragment>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </Fragment>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
