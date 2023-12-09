import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Section, SectionAlternate } from "components/organisms";

import { useMediaQuery } from "@mui/material";
import {
  TopBannerCarousel,
  PricingTable,
  CommonShop,
  FacebookFeed,
  PromotionNews,
  Services,
  OrderSteps,
  ServingMenu
} from "./components";
import { homepage_advantages, banhMiNemfireStore } from "Config";
import OrderView from "views/Order";

const useStyles = makeStyles(theme => ({
  sectionAlternate: {
    paddingTop: 0,
    paddingBottom: 20
  },
  swiperContainer: {
    width: "100%"
  },
  image: {
    objectFit: "cover"
  },
  bannerTop: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

const Home = (): JSX.Element => {
  const [homeState, setHomeState] = useState<any>({
    topBanners: [],
    advantages: [],
    servingMenu: [],
    facebookPosts:[],
    deliveryServices: []
  });
  useEffect(() => {
    console.log("fetch....");
    banhMiNemfireStore
      .collection("HomePage")
      .doc("config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setHomeState(result.data());
        }
        console.log(result);
      });
      setTimeout(() => {
        if (location.hash) location = location;
      }, 500);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <SectionAlternate
        disablePadding={true}
        className={classes.sectionAlternate}
      >
        <>
          <TopBannerCarousel topBanners={homeState.topBanners} />
          <br />
          <Services advantages={homeState.advantages} />
        </>
      </SectionAlternate>
      <Section>
        <ServingMenu servingMenu={homeState.servingMenu} />
      </Section>
      <OrderView />
      <Section>
        <PromotionNews promotionNews={homeState.facebookPosts} />
      </Section>
    </div>
  );
};

export default Home;
