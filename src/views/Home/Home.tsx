import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Section, SectionAlternate } from "components/organisms";

import { useMediaQuery } from "@material-ui/core";
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
import { homepage_advantages, uShopBKKfireStore } from "Config";

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
    uShopBKKfireStore
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
      <SectionAlternate id="link-to-order">
        <CommonShop commonShops={homeState.deliveryServices} />
      </SectionAlternate>
      <Section>
        <PromotionNews promotionNews={homeState.facebookPosts} />
      </Section>
    </div>
  );
};

export default Home;
