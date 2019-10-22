import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

// Set up material-ui custom styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

// Set up material-ui navbar custom component
const NavBar = props => {
  const classes = useStyles();
  const [values, setValues] = useState({
    zipCode: ""
  });

  // Handle input field value change
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Handle search button click
  const handleClick = () => () => {
    const zipCode = values.zipCode;
    if (!zipCode) return insertValidZipCode();
    props.loadPickupPoints(zipCode);
    setValues({ ...values, zipCode: "" });
  };

  // Handle feedback to the user
  const insertValidZipCode = () => {
    alert("Please insert a valid zip code in the search bar");
    setValues({ ...values, zipCode: "" });
  };

  // Render material-ui custom navbar
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Zip Code"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange("zipCode")}
              value={values.zipCode}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleClick("")}
            >
              Search
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
