import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: 0,
  },
  newsletter: {
    backgroundColor: theme.palette.secondary.dark,
    padding: '35px 0',
  },
  footerBottom: {
    paddingTop: 35,
    background: theme.palette.primary.main,
  },
  socialIcon: {
    marginRight: 10,
  },
}));

export default useStyles;
