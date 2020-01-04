import React, { useContext } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import ThemeContext from './themeContext';

export default function MaterialThemeProvider(props) {
  const themeContext = useContext(ThemeContext);
  
  const theme = createMuiTheme({
    palette: {
      type: themeContext.themeType,
      primary: {
        light: '#515b5f',
        main: '#263238',
        dark: '#1a2327',
        contrastText: '#fff',
      },
      secondary: {
        light: '#33eb91',
        main: '#00e676',
        dark: '#00a152',
        contrastText: '#fff',
      },
    },
  });
  const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
  }));
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  );
}
