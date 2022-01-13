import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

function Feedbackitem({ item }) {
  //const handleClick = (id) => handleDelete(id);
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>

      <button onClick={(event) => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className='edit'
      >
        <FaEdit color='purple' />
      </button>

      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
