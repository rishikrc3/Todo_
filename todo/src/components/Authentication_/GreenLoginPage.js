import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login"; // Import the Login component

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#426b1f", // Green color for the background
    minHeight: "100vh", // Make the background cover the full height of the viewport
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

const GreenLoginPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Login />
      </div>
    </div>
  );
};

export default GreenLoginPage;
