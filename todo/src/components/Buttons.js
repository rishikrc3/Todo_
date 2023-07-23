import React from "react";
import { makeStyles, Button, Typography, Paper } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "white", // Set the background color to green
    color: "#426b1f", // Set the text color to white
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    maxWidth: "50%",
    height: "70vh",

    margin: "0 auto",
    marginTop: "calc(8% + 0px)",
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      marginTop: "calc(8% + 20px)", // Adjust margin for medium and larger screens
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "calc(10% + 20px)", // Adjust margin for small screens
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "calc(15% + 20px)", // Adjust margin for extra-small screens
    },
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row", // Arrange buttons in a row
    justifyContent: "space-between",
    flexWrap: "wrap", // Allow buttons to wrap to the next row
    gap: "20px",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between", // Adjust alignment for large screens
    },
  },
  button: {
    flex: "1 0 45%", // Adjusted width for medium screens, each button takes 45% of the row
    minWidth: "180px", // Increase the minimum width for larger buttons
    height: "60px", // Set the height of the buttons
    fontSize: "14px", // Increase the font size of the button text
    backgroundColor: "white", // Set the background color to white
    color: "#426b1f", // Set the text color to green
    fontFamily: "var(--font-newsreader)",
  },
  bigButton: {
    flex: "1 0 100%", // Full width for the big button
    minWidth: "360px", // Minimum width for the big button
    height: "80px", // Set the height of the big button
    fontSize: "24px", // Increase the font size of the big button text
    backgroundColor: "#426b1f", // Set the background color to white
    color: "white", // Set the text color to green
  },
  headingContainer: {
    textAlign: "center", // Center align the text
    marginBottom: "10px",
  },
  heading: {
    fontFamily: "var(--font-newsreader)",
    color: "#000000",
    fontSize: "70px",
    fontWeight: "",
    letterSpacing: "-0.02em",
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.headingContainer}>
        <Typography variant="h6" className={classes.heading}>
          Trending Topics
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="success"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          Java <br />
          Go to resources
        </Button>
        <Button
          variant="contained"
          color="success"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          C++
          <br />
          Go to resources
        </Button>
        <Button
          variant="contained"
          color="success"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          C <br /> Go to resources
        </Button>
        <Button
          variant="contained"
          color="success"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          Python <br /> Go to resources
        </Button>
        <Button
          variant="contained"
          color="success"
          className={classes.bigButton}
          endIcon={<ArrowForwardIcon />}
        >
          Take a test
        </Button>
      </div>
    </Paper>
  );
};

export default Buttons;
