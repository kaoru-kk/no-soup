import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from "react-router-dom";

import TopPage from "../Top/TopComponent";
import AboutPage from "../About/AboutComponent";
import LogInPage from "../Authentication/LogInComponent";

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#fda300"
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
            {[['Topページ', "/"], ['no-soupについて',"/about"],  ['近くのお店を探す', "search"], ['会員登録', "/login"]].map((contents, index) => (
                <ListItem button key={contents}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <Link to={contents[1]}>
                        <ListItemText primary={contents[0]} />
                    </Link>
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                No-Soup
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
        </Hidden>
    </nav>
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path='/' component={TopPage} />
        <Route exact path='/about' component={AboutPage} />
        {/* <Route exact path='/contact' component={Contact} /> */}
        <Route exact path='/login' component={LogInPage} />
    </main>
    </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
    window: PropTypes.func,
};

export default ResponsiveDrawer;

// import React, {useState} from "react";
// import {Link, Route} from "react-router-dom";

// import TopPage from "../Top/TopComponent";
// import AboutPage from "../About/AboutComponent";
// import LogInPage from "../Authentication/LogInComponent";

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const Contact = () => (
//     <div>
//         <h2>contact</h2>    
//     </div>
// )


// export default function Header() {
//     //state変数を定義できる
//     var [openMenu, setCount] = useState(false)
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <AppBar position="static" className={classes.headerColor}>
//                 <Toolbar>
//                     <IconButton 
//                     edge="start"
//                     className={classes.menuButton}
//                     color="inherit"
//                     aria-label="menu"
//                     onClick={() => setCount(openMenu? openMenu = false : openMenu = true)}>
//                         <MenuIcon />
//                     </IconButton>
//                     {
//                         openMenu?
//                         <div>aaaa</div>
//                         :
//                         <div>bbbb</div>
//                     }
                    
//                     <div className={classes.toolbarButtons}>
//                         <div>{openMenu}</div>
                        
//                         <Link to='/' className={classes.headerLink}>TOP</Link>
//                         <Link to='/about' className={classes.headerLink}>no-soupについて</Link>
//                         <Link to='/contact' className={classes.headerLink}>近くのお店を探す</Link>
//                         <Link to='/login' className={classes.headerLink}>ログイン</Link>
//                     </div>          
//                 </Toolbar>
//             </AppBar>
//                 <Route exact path='/' component={TopPage} />
//                 <Route exact path='/about' component={AboutPage} />
//                 <Route exact path='/contact' component={Contact} />
//                 <Route exact path='/login' component={LogInPage} />
//         </div>
//     );
// }


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     headerColor: {
//         backgroundColor: "#fda300"
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     headerLink: {
//         color: "inherit",
//         textDecoration: "none",
//         marginRight: "15px",
//         fontSize: "16px",
//         fontWeight: "bold"
//     },
//     toolbarButtons: {
//         marginLeft: "auto"
//     }
// }));
