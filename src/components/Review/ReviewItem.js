import React from 'react';

const ReviewItem = ({ review }) => {
    return (
        <div>
            <p style={{ ...styles.MainTitleStyle }}><i>{review.title}</i> | {review.rating} stars</p>
            <p><em style={{ ...styles.commentStyle }}>{review.comment}</em></p>
            <p><i><b>- {review?.user?.name || ''}</b></i></p>
            <hr />
        </div>
    )
}

export default ReviewItem;

 const styles = {
  commentStyle: {
    width: 800,
    height: 20,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.54,
    letterSpacing: 0.1,
    color: "#333333",
  },
  MainTitleStyle: {
    width: 800,
    height: 22,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.38,
    letterSpacing: "normal",
    color: "#1d86b8",
  },
 
};