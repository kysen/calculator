import React from "react";
import Calculator from "../Calculator/Calculator";
import { makeStyles } from "@material-ui/core/styles";

import buttonStyle from "../../assets/cool-calculator.png";
import buttonLayout from "../../assets/calculator-layout.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0px 20px 0px",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Calculator />
      <div>
        <img src={buttonStyle} alt="style" />
        <img src={buttonLayout} alt="layout" />
      </div>
    </div>
  );
}

export default LandingPage;
