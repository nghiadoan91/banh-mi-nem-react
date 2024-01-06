import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid, useMediaQuery, colors } from "@mui/material";
import { SectionHeader, IconAlternate, TypedText } from "components/molecules";
import { CardCategory } from "components/organisms";
import { Image } from "components/atoms";
import theme from '../../../theme';

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

const BranchDelivery = ({ commonShop }): JSX.Element => {
  const classes = useStyles();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div>
      <SectionHeader
        title={
          commonShop.title
        }
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 1}>
        {(commonShop.dRobinHoodUrl != "") ?
          <Grid
            key={1}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <a href={commonShop.dRobinHoodUrl} target="blank">
              <CardCategory
                variant="outlined"
                liftUp
                align="center"
                title={"Robinhood"}
                icon={
                  <Image
                    className={classes.logo}
                    src={"https://i.pinimg.com/originals/2d/9a/c4/2d9ac444430ab7fd77778151297d521f.jpg"}
                    lazyProps={{ height: 100 }}
                  />
                }
              />
            </a>
          </Grid>: null
        }
        {(commonShop.dLineManUrl != "") ?
          <Grid
            key={1}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <a href={commonShop.dLineManUrl} target="blank">
              <CardCategory
                variant="outlined"
                liftUp
                align="center"
                title={"Lineman"}
                icon={
                  <Image
                    className={classes.logo}
                    src={"https://i.pinimg.com/originals/bf/4c/30/bf4c3022938472887a0923b65dc3b9b4.jpg"}
                    lazyProps={{ height: 100 }}
                  />
                }
              />
            </a>
          </Grid>: null
        }
        {(commonShop.dGrabUrl != "") ?
          <Grid
            key={1}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <a href={commonShop.dGrabUrl} target="blank">
              <CardCategory
                variant="outlined"
                liftUp
                align="center"
                title={"Grab"}
                icon={
                  <Image
                    className={classes.logo}
                    src={"https://i.pinimg.com/originals/f6/73/76/f67376bcde1fb20a4217385eab4dd7b3.jpg"}
                    lazyProps={{ height: 100 }}
                  />
                }
              />
            </a>
          </Grid>: null
        }
        {(commonShop.dShopeeUrl != "") ?
          <Grid
            key={1}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <a href={commonShop.dShopeeUrl} target="blank">
              <CardCategory
                variant="outlined"
                liftUp
                align="center"
                title={"Shopee Food"}
                icon={
                  <Image
                    className={classes.logo}
                    src={"https://firebasestorage.googleapis.com/v0/b/banh-mi-nem.appspot.com/o/Delivery%2FshopeeFood.png?alt=media"}
                    lazyProps={{ height: 100 }}
                  />
                }
              />
            </a>
          </Grid>: null
      }
      </Grid>
    </div>
  );
};

export default BranchDelivery;
