import React from "react";
import { makeStyles, Button, Typography, Paper } from "@material-ui/core";

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
    gap: "10px",
  },
  button: {
    minWidth: "150px",
    backgroundColor: "white", // Set the background color to white
    color: "#426b1f", // Set the text color to green
  },
  headingContainer: {
    textAlign: "center", // Center align the text
    marginBottom: "10px",
  },
  heading: {
    fontFamily: "var(--font-newsreader)",
    color: "#000000",
    fontSize: "32px",
    fontWeight: "bold",
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
    </Paper>
  );
};

export default Buttons;
