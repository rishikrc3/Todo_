import React from "react";
import { makeStyles } from "@material-ui/core";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#426b1f",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  navigation: {
    display: "flex",
    marginBottom: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#ffffff",
    marginLeft: "15px",
    marginRight: "15px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#e4e4e4",
    },
  },
  contact: {
    marginBottom: "20px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    fontSize: "20px",
  },
  whiteIcon: {
    color: "#ffffff", // Set the icon color to white
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>Coding Buddy</div>
      <div className={classes.navigation}>
        <a href="/" className={classes.navLink}>
          Home
        </a>
        <a href="/" className={classes.navLink}>
          About
        </a>
        <a href="/" className={classes.navLink}>
          Services
        </a>
        <a href="/" className={classes.navLink}>
          Contact
        </a>
      </div>
      <div className={classes.contact}>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div className={classes.socialIcons}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.whiteIcon} // Apply the whiteIcon class to the social links
        >
          <FaFacebook />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.whiteIcon} // Apply the whiteIcon class to the social links
        >
          <FaTwitter />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.whiteIcon} // Apply the whiteIcon class to the social links
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.whiteIcon} // Apply the whiteIcon class to the social links
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
