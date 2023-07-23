import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    width: "50%", // Set a fixed width to make the search bar horizontally elongated
    height: "70px", // Set a fixed height to make the search bar horizontally cylindrical
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center the search bar within the container
    [theme.breakpoints.down("sm")]: {
      width: "100%", // On small screens, make it full-width
    },
    position: "absolute", // Position the search bar absolutely
    paddingTop: "calc(6% + 10px)", // Place the search bar 8% from the top of the screen
    paddingBottom: "10px",
    left: "2%", // Adjust the horizontal position as needed
    transform: "translateY(-50%)", // Center the search bar vertically
    borderRadius: "10px", // Make the container horizontally cylindrical with half of the height value
    overflow: "hidden", // Hide any content that overflows from the container
    [theme.breakpoints.down("md")]: {
      paddingTop: "calc(8% + 20px)", // For medium screens, reduce the padding
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "calc(8% + px)", // For small screens, further reduce the padding
    },
  },
  searchField: {
    width: "100%",
    height: "100%", // Make the input field take the full height of the search bar
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px", // Make the search bar input field horizontally cylindrical
      height: "100%", // Make the input field take the full height of the search bar
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: "12px", // Add some padding to the left of the icon to make it centered vertically
    },
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "4px", // Add some padding to the right of the icon to make it centered vertically
    },
  },
  searchIcon: {
    borderRadius: "20px", // Make the icon horizontally cylindrical with half of the height value
    backgroundColor: theme.palette.common.white, // Add a background color to match the search bar's background
    padding: "8px", // Add padding to the icon for better spacing
    color: theme.palette.text.primary, // Match the icon color with the text color
  },
  arrowIcon: {
    color: theme.palette.text.primary,
    cursor: "pointer", // Match the icon color with the text color
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Handle your search logic here
  };
  const handleClick = () => {
    alert("Cicked!");
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        className={classes.searchField}
        variant="outlined" // Make the search bar outlined
        label="Search Bar"
        value={searchQuery}
        onChange={handleSearchChange}
        helperText="Enter what you want to search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={classes.searchIcon}>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ArrowForwardIcon
                className={classes.arrowIcon}
                onClick={handleClick}
              />
            </InputAdornment>
          ),
        }}
        focused
      />
    </div>
  );
};

export default SearchBar;
