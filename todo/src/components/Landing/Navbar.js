import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom"; // If you are using React Router

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#426b1f",
    color: "black",
    height: "60px",
  },
  title: {
    flexGrow: 1,
    fontFamily: "var(--font-newsreader)",
    fontWeight: 500,
    fontSize: "30px",
    letterSpacing: "-0.01em",
    lineHeight: "100%",
    color: "white",
    textDecoration: "none",
    textAlign: "left",
  },
  linkButton: {
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    color: "inherit",
    [theme.breakpoints.down("sm")]: {
      display: "none", // Hide the links on small screens
    },
  },
  loginButton: {
    backgroundColor: "white", // Green background color
    color: "#426b1f", // Text color
    marginLeft: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#FOFOFO", // Darker white color on hover
    },
    [theme.breakpoints.down("sm")]: {
      display: "none", // Hide the login/signup button on small screens
    },
  },
  menuIcon: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none", // Hide the menu icon on medium and large screens
    },
  },
  drawerList: {
    width: 200,
    backgroundColor: "#426b1f", // Bluish background color for the drawer
    height: "100%", // Make the drawer take full height of the screen
    color: "white", // Text color
  },
  lowbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.7rem",
    marginTop: "-15px", // Move the button up by -15px
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false); //for dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = (
    <div>
      {/* Replace '/' with the respective URLs for each link */}
      <Button component={Link} to="/" className={classes.linkButton}>
        <HomeIcon />
      </Button>
      <Button component={Link} to="/about" className={classes.linkButton}>
        <InfoIcon />
      </Button>
      <Button component={Link} to="/contact" className={classes.linkButton}>
        <MailIcon />
      </Button>
      {/* Green color button */}
      <Button
        component={Link}
        variant="contained"
        to="/signup"
        className={classes.loginButton}
      >
        Login/Signup
      </Button>
    </div>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Typography variant="h6" className={classes.title}>
            Code Buddy
          </Typography>
        </Link>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuIcon}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        {navLinks}
      </Toolbar>
      {/* Collapsible navigation menu for small screens */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <div className={classes.drawerList} onClick={toggleMenu}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <div className={classes.lowbox}>
            {/* Green color button */}
            <Button
              component={Link}
              variant="contained"
              to="/signup"
              className={classes.loginButton}
            >
              Login/Signup
            </Button>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
