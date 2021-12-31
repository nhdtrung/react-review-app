import React, { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState('7');
    const [feedback, setFeedback] = useState('This is an feedback');

    const handleClick = () => {
        setRating((prev) => {
            return parseInt(prev) + 1
        });
    }
                
    return (
        <div className='card'>
            <div className='num-display'>{ rating }</div>
            <div className='text-display'>
                { feedback }
            </div>
            <button onClick={handleClick}>Increase rating</button>
        </div>
    )
}

FeedbackItem.defaultProps = {
    rating: Number
}

export default FeedbackItem;
