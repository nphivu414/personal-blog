import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  IconButton,
  Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 64,
  },
  card: {
    maxWidth: 345,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  descriptionText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
  },
}));

function PostList(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      {data.map(item => {
        const {
          _id,
          slug,
          title,
          created,
          metadata: {
            description,
            hero: { imgix_url },
          },
        } = item;
        return (
          <Grid key={_id} item xs={12} sm={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardHeader
                  title={<Typography variant="button">{title}</Typography>}
                  subheader={
                    <Typography variant="subtitle2" color="textSecondary">
                      {created}
                    </Typography>
                  }
                />
                <CardMedia
                  className={classes.media}
                  image={imgix_url}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.descriptionText}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
export default PostList;
