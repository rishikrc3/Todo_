import { Button, TextField } from "@mui/material";
import "./styles/LandingPage.css";
const LandingPage = () => {
  return (
    <form className="landing-page">
      <Button className="java" size="large" variant="contained" color="success">
        Java
      </Button>

      <Button
        className="java1"
        sx={{ width: 254 }}
        variant="contained"
        color="success"
      >
        C
      </Button>
      {/* <Button
        className="java2"
        sx={{ width: 254 }}
        variant="contained"
        color="success"
      >
        C++
      </Button>
      <Button
        className="java3"
        sx={{ width: 254 }}
        variant="contained"
        color="success"
      >
        Python
      </Button>
      <TextField
        className="summary"
        sx={{ width: 580 }}
        color="primary"
        variant="standard"
        multiline
        label="Fun Chat"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <Button
        className="button"
        sx={{ width: 532 }}
        variant="contained"
        color="success"
      >
        Take a fun test
      </Button> */}
      <section className="page-heading" Topic>
        <div className="divider" />
        <label className="trending-topics">Trending Topics</label>
      </section>
      <nav className="navigation" NavBar>
        <div className="coding-buddy">Coding Buddy</div>
        <div className="something1">something1</div>
        <div className="something2">something2</div>
        <div className="something3">something3</div>
        <Button
          className="cart-button"
          sx={{ width: 126 }}
          variant="contained"
          color="success"
        >
          Login/Signup
        </Button>
      </nav>
      <TextField
        className="landing-page-child"
        sx={{ width: 572 }}
        color="success"
        variant="outlined"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <div className="search-something">Search Something...</div>
      <img className="icon" alt="" src="/icon.svg" />
    </form>
  );
};

export default LandingPage;
