import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import ReactForm from "./ReviewForm";
import { createReview } from "../../actions/reviews";
import { dealershipReviewSelector } from "../../selectors/dealerships";
import { isEmpty } from "lodash";

export const Review = ({ selectedDealerId, currentUser }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const dealerReviews = useSelector((state) =>
    dealershipReviewSelector(state, selectedDealerId)
  );

  const handleClick = () => setOpen(!open);

  const handleSubmit = (params) => {
    dispatch(createReview(params, selectedDealerId)).then((res) => {
      console.log(res);
    });
  };

  return (
    <div style={{ ...styles.ReviewsRectangleBox }}>
      {!isEmpty(currentUser) && (
        <>
          <Button type="button" onClick={handleClick}>
            {open ? "Cancel" : "New Review"}
          </Button>
          {open && <ReactForm handleFormSubmit={handleSubmit} />}

          <hr />
        </>
      )}

      {dealerReviews.map((f) => {
        return (
          <div key={f.id}>
            <p style={{ ...styles.MainTitleStyle }}>
              <i> {f.title}</i> | {f.rating} stars
            </p>
            <p>
              <em style={{ ...styles.commentStyle }}>{f.comment}</em>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

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
  ReviewsRectangleBox: {
    width: 600,
    backgroundColor: "#e6e6e6",
    boxSizing: "inherit",
    padding: "1px 1px 1px 20px",
    border: "solid 1px #e6e6e6",
  },
};

export default Review;
