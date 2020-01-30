import React from "react";
import LandingPage from "./views/LandingPage/LandingPage";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
