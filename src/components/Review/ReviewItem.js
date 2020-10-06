import React from 'react';

const ReviewItem = ({ review }) => {
    return (
        <div>
            <strong>{review.title}</strong> | {review.rating} stars
            <p><em>{review.comment}</em></p>
            <hr />
        </div>
    )
}

export default ReviewItem;