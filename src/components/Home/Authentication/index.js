import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  Grid,
  withStyles
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';

import { requestLogin, logout } from '../../../actions/authentication';
import { registerUser } from '../../../actions/users';
import styles from './styles';

function SignIn({ dispatch, classes, currentUser, handleProfileClick, handleHomeClick }) {
  let history = useHistory();
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (open) {
      const name = e.target.name.value;
      const confirmPassword = e.target.confirmPassword.value;

      if (email && password && confirmPassword) {
        const params = { user: { name, email, password, password_confirmation: confirmPassword } };
        dispatch(registerUser(params))
        .then((response) => {
          if (response.error) setError("Failed to Register");
          return response;
        });
      } else setError({ message: 'email or password invalid' });
    } else {
      if (email && password) {
        dispatch(requestLogin({ email, password })).then((response) => {
          if (response.error) setError("Failed to Login");
          return response;
        });
      } else setError({ message: 'email or password invalid' });
    }
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  if (!isEmpty(currentUser)) {
    return (
      <Paper className={classes.paper} elevation={0}>
        <Avatar className={classes.avatar}>
          {currentUser.name[0]}
        </Avatar>

        <Typography component="h1" variant="h5">
            {currentUser.name}
        </Typography>

        <Typography component="h5" variant="subtitle1">
            {currentUser.email}
        </Typography>

        <Button onClick={() => history.push('/')}>Home</Button>
        {currentUser.admin && <Button onClick={() => history.push('/profile')}>Profile</Button>}
        <Button onClick={handleLogout}>Logout</Button>
      </Paper>
    )
  }

  console.log(error);

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
            {open ? 'Sign Up' : 'Sign In'}
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          {error && (
            <Typography className={classes.errorMessage}>
              {error}
            </Typography>
          )}

          {open && (
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input id="name" name="name" autoFocus />
            </FormControl>
          )}

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>

          {open && (
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="confirmPassword">Password</InputLabel>
              <Input name="confirmPassword" type="password" id="confirm-password"/>
            </FormControl>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {open ? "Sign Up" : "Login"}
          </Button>

          <Grid container>
            <Grid item xs>
            </Grid>

            <Grid item>
              <Button onClick={() => setOpen(!open)}>
                {open ? "Login" : "Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = { classes: PropTypes.object.isRequired };

const componentWithStyles = withStyles(styles)(SignIn);

export default connect()(componentWithStyles);
