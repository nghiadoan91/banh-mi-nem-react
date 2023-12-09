import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import { useMediaQuery, Typography, Button, Grid } from "@mui/material";
import { SectionHeader } from "components/molecules";
import { Image } from "components/atoms";
import theme from '../../../theme';

const Services = (): JSX.Element => {
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  return (
    <div>
      <SectionHeader
        title={
          <span>
            {"Dịch vụ đặt hàng hộ có "}
            <Typography component="span" variant="inherit" color="primary">
              5 bước
            </Typography>
            {" quy trình"}
          </span>
        }
        subtitle=""
        ctaGroup={[<></>]}
        fadeUp
      />
      <Image
        id="how-to-order"
        src="https://i.pinimg.com/originals/73/f4/13/73f413172ff795f2c749257e05e2e2f0.jpg"
      />
    </div>
  );
};

export default Services;
