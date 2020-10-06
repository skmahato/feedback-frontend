import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const ReviewForm = ({ handleFormSubmit }) => {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [visible, setVisible] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = {
            title,
            comment,
            rating,
            visible
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

       <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1} label="Visibility">
          <Grid item>Only Show To Admin</Grid>
          <Grid item>
            <AntSwitch checked={visible} onChange={() => setVisible(!visible)} name="checkedC" />
          </Grid>
          <Grid item>Public</Grid>
        </Grid>
      </Typography>


          <Button type="submit">Submit</Button>
        </form>
    )
}

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default ReviewForm;