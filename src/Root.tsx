import { useState } from "react";

// コンポネント
import Header from "./Components/Header/Header";
import Index from "./Components/TopMovieList/Index";
import { TopMovieData } from "./Components/TopMovieList/Parts/TopMovieData";

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
        <Index>
          {TopMovieData.map((movie) => (
            <Index.Item movie={movie} key={movie.id}>
              item1
            </Index.Item>
          ))}
        </Index>
        <Index>
          {TopMovieData.map((movie) => (
            <Index.Item movie={movie} key={movie.id}>
              item1
            </Index.Item>
          ))}
        </Index>
      </ThemeProvider>
    </>
  );
}

export default Root;
