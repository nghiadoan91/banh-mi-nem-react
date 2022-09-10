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
  OrderSteps
} from "./components";
import { uShopBKKfireStore } from "Config";

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
    homepage_top_banner: [],
    homepage_advantages: [],
    shipment_pricing_table: [],
    promotion_news: [],
    common_shops: []
  });
  useEffect(() => {
    console.log("fetch....");
    uShopBKKfireStore
      .collection("homepage")
      .doc("config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setHomeState(result.data());
        }
      });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <SectionAlternate
        disablePadding={true}
        className={classes.sectionAlternate}
      >
        <>
          <TopBannerCarousel topBanners={homeState.homepage_top_banner} />
          <br />
          <Services advantages={homeState.homepage_advantages} />
        </>
      </SectionAlternate>
      <Section>
        <PromotionNews promotionNews={homeState.promotion_news} />
      </Section>
      <SectionAlternate>
      <CommonShop commonShops={homeState.common_shops} />
      </SectionAlternate>
      <Section>
        <OrderSteps /> 
      </Section>
      <SectionAlternate>
        <PricingTable shipmentPricingTable={homeState.shipment_pricing_table} />
      </SectionAlternate>
      <Section>
        
      </Section>
    </div>
  );
};

export default Home;
