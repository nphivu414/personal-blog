import React, { useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Parallax } from 'react-parallax';
import ThemeContext from 'src/theme/themeContext';
import useStyles from './style';

function Header(props) {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const { title, bannerImage } = props;
  const { themeType, changeThemeType } = theme;

  function handleChange(e) {
    if (themeType === 'dark') {
      changeThemeType('light');
    } else {
      changeThemeType('dark');
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
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
            {/*  */}
            <FormControlLabel
              value={themeType}
              control={
                <Switch
                  checked={themeType === 'dark'}
                  onChange={handleChange}
                  value="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              }
              label="Dark Theme"
              labelPlacement="start"
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Parallax
        blur={{ min: -10, max: 15 }}
        bgImageStyle={{
          top: '-40%'
        }}
        bgImage={bannerImage}
        bgImageAlt={title}
        strength={200}
      >
        <div style={{ height: '450px' }}>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
        </div>
      </Parallax>
    </div>
  );
}

export default Header;
