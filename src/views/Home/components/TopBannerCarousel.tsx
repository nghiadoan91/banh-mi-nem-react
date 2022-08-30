import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Image } from "components/atoms";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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

const TopBannerCarousel = ({ topBanners }): JSX.Element => {
  SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);
  const classes = useStyles();
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} autoplay={true}>
      {topBanners.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={item.image}
            className={classes.image}
            lazyProps={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopBannerCarousel;
