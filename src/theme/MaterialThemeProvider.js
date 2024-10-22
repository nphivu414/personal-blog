import React, { useContext } from 'react';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import ThemeContext from './themeContext';

export default function MaterialThemeProvider(props) {
  const themeContext = useContext(ThemeContext);

  let theme = createMuiTheme({
    palette: {
      type: themeContext.themeType,
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000',
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

  theme = responsiveFontSizes(theme);

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
