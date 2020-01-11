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
} from '@material-ui/core';
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons';
import { getGeneralSetting } from 'src/redux/selectors/setting/settingSelector';
import LatestProject from 'src/components/Footer/LatestProject';

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
          <Grid container={true} spacing={10}>
            <Grid item={true} lg={4}>
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
            <Grid item={true} lg={2}>
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
            <Grid item={true} lg={6}>
              <LatestProject />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
