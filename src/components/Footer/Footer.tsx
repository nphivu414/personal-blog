import * as React from 'react';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
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
import { getGeneralSetting } from 'src/redux/selectors/setting/settingSelector';

import useStyles from './style';

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = () => {
  const classes = useStyles({});
  const generalSetting = useSelector(getGeneralSetting);
  const authorBio = get(generalSetting, 'metadata.author_bio');
  const authorAvatar = get(generalSetting, 'metadata.author_avatar.imgix_url');
  return (
    <div className={classes.footer}>
      <div className={classes.footerBottom}>
        <Container>
          <Grid container spacing={10}>
            <Grid item lg={4}>
              <List
                subheader={<Typography variant="h5">About Me</Typography>}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={authorAvatar} />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Typography variant="body2" component="p" color="textSecondary">
                        <div dangerouslySetInnerHTML={{ __html: authorBio }} />
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={2}>
              <List
                subheader={<Typography variant="h5">Follow Me</Typography>}
              >
                <ListItem>
                  <Facebook className={classes.socialIcon} />
                  <Twitter className={classes.socialIcon} />
                  <LinkedIn className={classes.socialIcon} />
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={6}>
              <List
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

          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
