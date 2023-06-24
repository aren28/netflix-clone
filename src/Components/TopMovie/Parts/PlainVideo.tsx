import React from "react";
import { Box } from "@mui/material";

function PlainVideo({ rankingNumber, rankingBackground }) {
  return (
    <>
      {rankingNumber}
      <Box
        component="img"
        src={rankingBackground}
        sx={{ borderRadius: "30px", width: "210px" }}
      />
    </>
  );
}

export default PlainVideo;
