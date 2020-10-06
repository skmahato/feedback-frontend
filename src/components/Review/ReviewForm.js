import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ReviewForm = ({ handleFormSubmit }) => {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [visible, setVisible] = useState(true);
    const classes = useStyles();

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
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Review
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="comment"
            label="Comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            required
          />
          <Typography component="div">
            <Grid
              component="label"
              container
              alignItems="center"
              spacing={1}
              label="Visibility"
            >
              <Grid item>Only Show To Admin</Grid>
              <Grid item>
                <AntSwitch
                  checked={visible}
                  onChange={() => setVisible(!visible)}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Public</Grid>
            </Grid>
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
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