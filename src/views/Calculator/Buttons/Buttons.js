import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  button: {
    border: "6px solid #82FFEE",
    borderRadius: "50%",
    margin: 10,
    minWidth: 0,
  },
  label: {
    fontSize: "4rem",
    width: 120,
    height: 120,
  },
  times: {
    transform: "translate(0px, 14px)",
  },
  decimal: {
    transform: "translate(0px, -18px)",
  },
  equals: {
    transform: "translate(0px, 2px)",
  },
}));

function Buttons() {
  const classes = useStyles();

  const allButtons = [
    { value: "√", type: "function", classname: classes.squareRoot },
    { value: "%", type: "function", classname: classes.percent },
    { value: "-/+", type: "function", classname: classes.negative },
    { value: "CE", type: "function", classname: classes.clear },

    { value: "7", type: "number", classname: classes.seven },
    { value: "8", type: "number", classname: classes.eight },
    { value: "9", type: "number", classname: classes.nine },
    { value: "/", type: "function", classname: classes.divide },
    { value: "4", type: "number", classname: classes.four },
    { value: "5", type: "number", classname: classes.five },
    { value: "6", type: "number", classname: classes.six },
    { value: "*", type: "function", classname: classes.times },
    { value: "1", type: "number", classname: classes.one },
    { value: "2", type: "number", classname: classes.two },
    { value: "3", type: "number", classname: classes.three },
    { value: "-", type: "function", classname: classes.minus },
    { value: "0", type: "number", classname: classes.zero },
    { value: ".", type: "function", classname: classes.decimal },
    { value: "=", type: "function", classname: classes.equals },
    { value: "+", type: "function", classname: classes.plus },
  ];

  const callAllButtons = () => {
    return allButtons.map((button, index) => {
      return (
        <Button
          size="large"
          variant="text"
          key={index}
          classes={{
            root: classes.button,
            label: clsx(classes.label, button.classname),
          }}
        >
          {button.value}
        </Button>
      );
    });
  };
  return <div className={classes.root}>{callAllButtons()}</div>;
}

export default Buttons;
