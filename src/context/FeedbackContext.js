import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'blahafhsijdfbk',
      rating: 10,
    },
    {
      id: 2,
      text: 'haha asdasdasdsadadaf',
      rating: 10,
    },
    {
      id: 3,
      text: 'lol asdadasdsd',
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm(`Are You Sure?`)) {
      setFeedback(feedback.filter((item) => id !== item.id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //this is how functions are accessed from form
  return (
    //editFeedback is the function that runs
    //feedbackEdit is a piece of state
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
