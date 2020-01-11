import React, { useContext } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Tooltip,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import {
  Search as SearchIcon,
  Brightness7 as LightThemeIcon,
  Brightness4 as DarkThemeIcon,
} from '@material-ui/icons';
import { Parallax } from 'react-parallax';
import ThemeContext from 'src/theme/themeContext';
import useStyles from './style';

function Header(props) {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const { title, bannerImage } = props;
  const { themeType, changeThemeType } = theme;
  const trigger = useScrollTrigger({ target: window });

  function handleChange(e) {
    if (themeType === 'dark') {
      changeThemeType('light');
    } else {
      changeThemeType('dark');
    }
  }
  return (
    <div className={classes.root}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color="default">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                {title}
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Tooltip title="Toggle light/dark theme" placement="bottom">
                <IconButton onClick={handleChange}>
                  {themeType === 'dark' ? (
                    <LightThemeIcon />
                  ) : (
                    <DarkThemeIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      <Parallax
        blur={3}
        bgImageStyle={{
          top: '-40%',
        }}
        className={classes.parallax}
        bgImage={bannerImage}
        bgImageAlt={title}
        strength={200}
      >
        <div className={classes.parallaxBackground}>
          <Typography
            className={classes.parallaxBackgroundTextColor}
            variant="h3"
            gutterBottom
          >
            Welcome to my blog
          </Typography>
          <Typography
            className={classes.parallaxBackgroundTextColor}
            variant="h6"
          >
            Thoughts, stories and ideas.
          </Typography>
        </div>
      </Parallax>
    </div>
  );
}

export default Header;
