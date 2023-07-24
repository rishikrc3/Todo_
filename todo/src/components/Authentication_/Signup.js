import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "27rem",
    width: "26rem",
    backgroundColor: "#FAFAF5",
    borderRadius: "24px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    gap: "2.2rem",
    border: "1.2px solid #E6E6E6",
    fontFamily: "var(--font-newsreader)", // Set the custom font
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  headingText: {
    color: "#426b1f", // Set the green color
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.6rem",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    gap: "1.3rem",
    width: "100%",
  },
  inputBox: {
    height: "2rem",
    borderRadius: "10px",
    outline: "none",
    border: "1.5px solid #E6E6E6",
    padding: "1rem",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  checkbox: {
    fontWeight: "100",
  },
  lowbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.7rem",
    marginTop: "-15px", // Move the button up by -10px
  },
  btn: {
    backgroundColor: "#426b1f", // Set the green color
    color: "#ffffff", // Set the text color to white
    padding: "10px 30px",
    outline: "none",
    cursor: "pointer",
    border: "1px solid #E6E6E6",
    borderRadius: "10px",
    fontFamily: "var(--font-newsreader)", // Set the custom font
  },
  btnHover: {
    "&:hover": {
      opacity: 0.9,
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  // Check if all the text fields are filled
  const checkAllFieldsFilled = () => {
    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  // Handle text field changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    checkAllFieldsFilled();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkAllFieldsFilled();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkAllFieldsFilled();
  };

  return (
    <Paper className={classes.container} elevation={3}>
      <div className={classes.heading}>
        <Typography variant="h5" className={classes.headingText}>
          Signup
        </Typography>
        <Typography variant="body2">
          Enter your details to create an account
        </Typography>
      </div>
      <form className={classes.form}>
        <div className={classes.input}>
          <TextField
            type="text"
            className={classes.inputBox}
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required // Set the field as required
          />
          <TextField
            type="email"
            className={classes.inputBox}
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required // Set the field as required
          />
          <TextField
            type="password"
            className={classes.inputBox}
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required // Set the field as required
          />
        </div>
        <div className={classes.checkboxContainer}>
          <Checkbox className={classes.checkbox} required />
          <Typography variant="body2">
            By proceeding, you agree to the Terms and Conditions
          </Typography>
        </div>
        <div className={classes.lowbox}>
          <Button
            variant="contained"
            className={`${classes.btn} ${classes.btnHover}`}
            disabled={!allFieldsFilled} // Disable the button if not all fields are filled
          >
            Submit
          </Button>
          <Typography variant="body2">
            Already have an account? Login
          </Typography>
        </div>
      </form>
    </Paper>
  );
};

export default Signup;
