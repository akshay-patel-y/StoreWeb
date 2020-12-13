import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, useTheme, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  AppBar,
  Drawer,
  List,
  Toolbar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Person from '@material-ui/icons/Person';
import GroupAdd from '@material-ui/icons/GroupAdd';
import InputIcon from '@material-ui/icons/Input';
import Public from '@material-ui/icons/Public';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: 200,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: 200,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    flexGrow: {
      flexGrow: 1,
    },
    logoutButton: {
      marginLeft: theme.spacing(1),
    },
    logoutIcon: {
      marginRight: theme.spacing(1),
    },
    changesButton: {
      marginTop: theme.spacing(0.75),
    },
  }),
);

type NavigationBarsProps = {
  companyName: String;
}

export const NavigationBars = (props: NavigationBarsProps) => {
  const { companyName } = props;  
  const classes = useStyles();
  const theme = useTheme();
    
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {};
  const handleLogout = () => {
    logout();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar
          className={classes.appBar}
          color="primary"
          position="fixed"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              {companyName}
            </Typography>
            <div className={classes.flexGrow} />
            <Tooltip title="Your Changes">
              <IconButton color="inherit">
                <div className={classes.changesButton}>
                  <ShoppingCartIcon />
                </div>
              </IconButton>
            </Tooltip>
            <Button
              className={classes.logoutButton}
              color="inherit"
              onClick={handleLogout}
            >
            <InputIcon className={classes.logoutIcon} />
              Sign out
            </Button>
          </Toolbar>
        </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
          <Divider />
          <List>
            {['Leadership', 'Impact', 'Recruitment', 'Retention'].map((text) => (
                <Link href={"/" + text.toLowerCase()} passHref>
              <ListItem button key={text}>
                <ListItemIcon>
                  {text == 'Leadership' && <Person />}
                  {text == 'Impact' && <Public />}
                  {text == 'Recruitment' && <GroupAdd />}
                  {text == 'Retention' && <CheckCircleIcon />}
                  </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
                </Link>
            ))}
          </List>
      </Drawer>
    </div>
  );
};

export default NavigationBars;