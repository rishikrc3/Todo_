import React from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#426b1f",
    color: "white",
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "&:hover": {
      textDecoration: "underline",
    },
  },
  copyright: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6">Contact Us</Typography>
      <Typography variant="body1">Email: info@example.com</Typography>
      <Typography variant="body1">Phone: (123) 456-7890</Typography>

      <div>
        <Link href="#" className={classes.link}>
          About Us
        </Link>
        <Link href="#" className={classes.link}>
          Privacy Policy
        </Link>
        <Link href="#" className={classes.link}>
          Terms of Service
        </Link>
      </div>

      <Typography variant="body2" className={classes.copyright}>
        &copy; 2023 Your Company. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
