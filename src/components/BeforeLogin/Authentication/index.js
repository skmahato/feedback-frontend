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

import { requestLogin } from '../../actions/authentication';
import { registerUser } from '../../actions/users';
import styles from './styles';

function SignIn({ dispatch, classes }) {
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (open) {
      const confirmPassword = e.target.confirmPassword.value;

      if (email && password && confirmPassword) {
        const params = { user: { email, password, password_confirmation: confirmPassword } };
        dispatch(registerUser(params))
        .then((response) => {
          if (response.error) setError(response.payload.response.error);
          return response;
        });
      } else setError({ message: 'email or password invalid' });
    } else {
      if (email && password) {
        dispatch(requestLogin({ email, password })).then((response) => {
          if (response.error) setError(response.payload.response.error);
          return response;
        });
      } else setError({ message: 'email or password invalid' });
    }
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
            Sign in
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          {error && (
            <Typography className={classes.errorMessage}>
              {error.message}
            </Typography>
          )}

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Username</InputLabel>
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
