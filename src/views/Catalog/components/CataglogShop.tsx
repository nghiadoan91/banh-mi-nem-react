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

const CatalogShop = ({ title, commonShops }): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  console.log("check");
  return (
    <div>
      <SectionHeader title={title} align="left" />
      <Grid container spacing={isMd ? 4 : 1}>
        {commonShops.map((item: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={6}
            md={2}
            data-aos="fade-up"
          >
            <a href={item.href} target="blank">
              <CardCategory
                noPadding={true}
                variant="outlined"
                liftUp
                align="center"
                title={item.name}
                className={classes.cardBase}
                icon={
                  <Image
                    className={classes.logo}
                    src={item.image}
                    lazyProps={{ height: 100 }}
                  />
                }
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CatalogShop;
