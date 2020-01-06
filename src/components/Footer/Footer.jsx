import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from '@material-ui/core';
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons';
import Newsletter from './Newsletter';
import useStyles from './style';

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      {/* <Newsletter /> */}
      <div className={classes.footerBottom}>
        <Container>
          <Grid container spacing={10}>
            <Grid item lg={4}>
              <List
                className={classes.root}
                subheader={<Typography variant="h5">Recent Posts</Typography>}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={4}>
              <List
                className={classes.root}
                subheader={<Typography variant="h5">Follow Me</Typography>}
              >
                <ListItem>
                  <Facebook className={classes.socialIcon} />
                  <Twitter className={classes.socialIcon} />
                  <LinkedIn className={classes.socialIcon} />
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={4}>
              <List
                className={classes.root}
                subheader={<Typography variant="h5">About Me</Typography>}
              >
                <ListItem>
                  <Typography variant="body2" component="p">
                    An ambitious developer who love to work with the latest
                    technologies on challenging and diverse projects
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
