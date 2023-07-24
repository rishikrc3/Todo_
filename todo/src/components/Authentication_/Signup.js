import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";

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
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: ".4rem",
  },
  headingText: {
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "small",
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
    border: "1.5px solid var(--borderColor)",
    padding: "1rem",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
  checkboxInput: {
    fontWeight: "100",
  },
  lowBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".7rem",
  },
  checkbox: {
    border: "1px solid var(--borderColor)",
  },
  termsText: {
    fontSize: "14px",
    fontWeight: "400",
  },
  submitButton: {
    backgroundColor: "var(--primaryColor)",
    color: "var(--white)",
    padding: "10px 30px",
    outline: "none",
    cursor: "pointer",
    border: "1px solid var(--borderColor)",
    borderRadius: "10px",
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

  return (
    <>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h2 className={classes.headingText}>Signup</h2>
          <p className={classes.subHeading}>
            Enter your details to create an account
          </p>
        </div>
        <form action="" className={classes.form}>
          <div className={classes.input}>
            <input
              type="text"
              className={classes.inputBox}
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className={classes.inputBox}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={classes.inputBox}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={classes.checkboxContainer}>
              <input
                type="checkbox"
                name=""
                id=""
                className={classes.checkbox}
              />
              <label htmlFor="" className={classes.termsText}>
                By proceeding, you agree to the Terms and Conditions
              </label>
            </div>
          </div>
          <div className={classes.lowBox}>
            <utton type="button" className={classes.submitButton}>
              Submit
            </utton>
            <p>Already have an account? Login</p>
          </div>
        </form>
        <Button>Hi</Button>
      </div>
    </>
  );
};

export default Signup;
