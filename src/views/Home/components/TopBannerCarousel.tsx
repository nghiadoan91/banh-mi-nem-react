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
    paddingTop: 10,
    paddingBottom: 10
  }
}));

const TopBannerCarousel = ({ topBanners }): JSX.Element => {
  SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);
  const classes = useStyles();
  return (
    <Swiper className={classes.bannerTop} slidesPerView={1} pagination={{ clickable: true }} autoplay={true}>
      {[1].map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={"https://i.pinimg.com/originals/20/ad/4a/20ad4ada515f1f0e6aa6d8d853807431.jpg"}
            className={classes.image}
            lazyProps={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopBannerCarousel;
