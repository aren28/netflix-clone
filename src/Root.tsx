import { useState } from "react";

// コンポネント
import Header from "./Components/Header/Header";

import { createTheme, ThemeProvider } from "@mui/material/";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: ['"Bebas Neue"', '"Noto Sans JP"', "sans-serif"].join(","),
  },
});

function Root() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default Root;
