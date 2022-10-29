import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, colors } from "@material-ui/core";
import { SectionHeader, IconAlternate, TypedText } from "components/molecules";
import { CardCategory } from "components/organisms";
import { Image } from "components/atoms";

const useStyles = makeStyles(() => ({
  typed: {
    fontWeight: "bold"
  },
  logo: {
    width: "auto",
    objectFit: "fill",
    align: "center"
  },
  cardBase: {
    paddingTop: 10
  }
}));

const CatalogShop = ({commonShop }): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  console.log("check");
  return (
    <div>
      <SectionHeader title={commonShop.title} align="left" />
      <iframe src={commonShop.iframe} width="100%" height="450" style={{border:0}} loading="lazy"></iframe>
    </div>
  );
};

export default CatalogShop;
