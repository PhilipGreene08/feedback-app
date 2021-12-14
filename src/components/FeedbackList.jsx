import Feedbackitem from './Feedbackitem';

// function FeedbackList({ feedback }) {
//   if (!feedback || feedback.length === 0) {
//     return <p>No Feedback Yet</p>;
//   }
//   return (
//     <div className='feedback-list'>
//       {feedback.map((item) => {
//         console.log(item);
//         <Feedbackitem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

// export default FeedbackList;

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
}

export default FeedbackList;
