import React from 'react';
import { Avatar } from '@material-ui/core';
import { rhythm } from 'src/utils/typography';
import useStyles from './style';

function Bio({ settings }) {
  const classes = useStyles();
  const { author_avatar, author_name } = settings;

  const avatarUrl = author_avatar && author_avatar.imgix_url;

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      {/* <img
        src={settings.author_avatar.imgix_url}
        alt={settings.author_name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      /> */}
      {avatarUrl && (
        <Avatar alt={author_name} src={avatarUrl} className={classes.avatar} />
      )}
      {settings.author_bio && (
        <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
      )}
    </div>
  );
}

export default Bio;
