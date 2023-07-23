import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom"; // If you are using React Router

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
  title: {
    flexGrow: 1,
    fontFamily: "var(--font-newsreader)",
    fontWeight: 500,
    fontSize: "32px",
    letterSpacing: "-0.01em",
    lineHeight: "100%",
    color: "#426b1f",
    textDecoration: "none",
    textAlign: "left",
  },
  linkButton: {
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    color: "inherit",
  },
  greenButton: {
    backgroundColor: "#426b1f", // Green background color
    color: "white", // Text color
    marginLeft: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#009900", // Darker green color on hover
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* Replace '/' with the homepage URL if using React Router */}
        <Link to="/" className={classes.title}>
          <Typography variant="h6">Code Buddy</Typography>
        </Link>
        <div style={{ marginLeft: "auto" }}>
          {/* Replace the '/' with the respective URLs for each link */}
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
          <Button variant="contained" className={classes.greenButton}>
            Login/Signup
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
