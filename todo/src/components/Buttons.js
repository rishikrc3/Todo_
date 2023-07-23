import React from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-start", // Align buttons to the left
    gap: "10px",
    marginTop: "0px", // Add margin at the top to create space between the components
    flexWrap: "wrap", // Allow buttons to wrap to the next line on smaller screens
  },
  button: {
    minWidth: "150px",
    backgroundColor: "#426b1f",
    color: "white", // Set the button text color to white
  },
  headingContainer: {
    textAlign: "left",
    marginBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "calc(7% + 10px)", // Adjust padding for small and larger screens
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "calc(8% + 10px)", // Adjust padding for extra-small screens
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "calc(4% + 10px)", // Adjust padding for medium-sized screens
    },
  },
  heading: {
    fontFamily: "var(--font-newsreader)", // Apply the specified font-family
    color: "#426b1f", // Apply the specified color
    fontSize: "28px", // Adjust the font size for the heading
    fontWeight: "bold", // Apply bold font weight
    letterSpacing: "-0.02em", // Adjust letter spacing for the heading
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.headingContainer}>
        <Typography variant="h6" className={classes.heading}>
          Trending Topics
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <Button variant="contained" color="success" className={classes.button}>
          Button 1
        </Button>
        <Button variant="contained" color="success" className={classes.button}>
          Button 2
        </Button>
        <Button variant="contained" color="success" className={classes.button}>
          Button 3
        </Button>
        <Button variant="contained" color="success" className={classes.button}>
          Button 4
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
