import React from "react";
import {Link, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    headerLink: {
        color: "inherit",
        textDecoration: "none",
        marginRight: "10px",
        fontSize: "16px",
        fontWeight: "bold"
    },
    toolbarButtons: {
        marginLeft: "auto"
    }
}));
const Home = () => (
    <div>
        <h2>home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>about</h2>
    </div>
)

const Contact = () => (
    <div>
        <h2>contact</h2>    
    </div>
)

const Login = () => (
    <div>
        <h2>login</h2>
    </div>
)

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <div className={classes.toolbarButtons}>
            <Link to='/' className={classes.headerLink}>TOP</Link>
            <Link to='/about' className={classes.headerLink}>no-soupについて</Link>
            <Link to='/contact' className={classes.headerLink}>近くのお店を探す</Link>
            <Link to='/login' className={classes.headerLink}>ログイン</Link>
            </div>          
        </Toolbar>
      </AppBar>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />

    </div>
  );
}

