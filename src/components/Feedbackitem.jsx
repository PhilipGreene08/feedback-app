import { useState } from 'react';
function Feedbackitem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is a feedback item');

  //   const handleClick = () => {
  //     setRating((rating) => {
  //       return rating * 2;
  //     });
  //     setText((text) => {
  //       return `${text} ${rating * 2}`;
  //     });
  //   };

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </div>
  );
}

export default Feedbackitem;
