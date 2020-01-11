import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from '@material-ui/core';
import { Android as AndroidIcon, Apple as AppleIcon } from '@material-ui/icons';

import { loadProjectListAction } from 'src/redux/thunk/project/projecttListThunk';
import { getProjectList } from 'src/redux/selectors/project/projectSelector';

type LatestProjectProps = {};

const { useEffect } = React;

const LatestProject: React.FunctionComponent<LatestProjectProps> = () => {
  const dispatch = useDispatch();
  const projectList = useSelector(getProjectList);

  useEffect(() => {
    dispatch(loadProjectListAction({}));
  }, [dispatch])

  function _handleStoreButtonClick(url: string) {
    return function () {
      window.open(url, '_blank');
    }
  }

  return (
    <List
      subheader={<Typography variant="h5">Latest Projects</Typography>}
    >
      {
        projectList.map(item => {
          const {
            title,
            metadata: {
              hero: { imgix_url },
              description,
              play_store_link,
              app_store_link
            }
          } = item;
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={imgix_url}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="p"
                        variant="body2"
                        color="textPrimary"
                      >
                        {description}
                      </Typography>
                      <div style={{ marginTop: 10 }}>
                        <IconButton size="small" style={{ background: '#1BBEFB', padding: 8, marginRight: 10 }} onClick={_handleStoreButtonClick(app_store_link)}>
                          <AppleIcon fontSize={"small"} />
                        </IconButton>
                        <IconButton size="small" style={{ background: '#689F38', padding: 8 }} onClick={_handleStoreButtonClick(play_store_link)}>
                          <AndroidIcon fontSize={"small"} />
                        </IconButton>
                      </div>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          )
        })
      }
    </List>
  )
}

export default LatestProject;