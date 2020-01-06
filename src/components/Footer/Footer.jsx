import React from 'react';
import { Container, Grid, Typography, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import useStyles from './style';

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5" gutterBottom={10}>STAY UPDATE WITH US !</Typography>
            <Typography variant="body1">
                Subscribe to our newsletter and get update directly in your inbox. You can unsubscribe anytime.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <form noValidate autoComplete="off">
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={11}>
                  <TextField label="Your Email" color="secondary" fullWidth />
                </Grid>
                <Grid item xs={1}>
                  <Send />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;