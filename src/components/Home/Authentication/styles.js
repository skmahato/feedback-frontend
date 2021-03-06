const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block',
      [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
  
    paper: {
      marginTop: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    },
  
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
  
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
  
    errorMessage: {
      backgroundColor: '#f8d7da',
      border: '1px solid #f8d7da',
      borderRadius: '.25rem',
      color: '#721c24',
      fontSize: 14,
      marginBottom: '1rem',
      padding: '5px 10px'
    },
  
    submit: { marginTop: theme.spacing(3) }
  });
  
  export default styles;
  