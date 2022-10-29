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
  }
}));

const CommonShop = ({ commonShops }): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div>
      <SectionHeader
        title={
          <>
            Order with us <br />
            {isMd ? null : <br />} &nbsp;
            <TypedText
              component="span"
              variant="h4"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: commonShops.map(item => item.name),
                typeSpeed: 50,
                loop: true
              }}
            />
          </>
        }
        align="left"
      />
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
            md={3}
            data-aos="fade-up"
          >
            <a href={item.href} target="blank">
              <CardCategory
                variant="outlined"
                liftUp
                align="center"
                title={item.name}
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

export default CommonShop;
