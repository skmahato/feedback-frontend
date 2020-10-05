import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const ReviewForm = ({ handleFormSubmit }) => {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = {
            title,
            comment,
            rating
        }
        handleFormSubmit(params);
    }

    return (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextareaAutosize
            rows={3}
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
            />

          <Button type="submit">Submit</Button>
        </form>
    )
}

export default ReviewForm;