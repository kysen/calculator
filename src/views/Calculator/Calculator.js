import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import Buttons from "./Buttons/Buttons";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "80px",
    marginBottom: 20,
    background:
      "linear-gradient(180deg, rgba(0,255,197,1) 0%, rgba(0,194,255,1) 100%)",
  },
}));

function Calculator() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>a;slkfja;lskfja;lskfj</Typography>
      <Buttons />
    </Box>
  );
}

export default Calculator;
