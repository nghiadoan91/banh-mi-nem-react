import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Image } from "components/atoms";
import { makeStyles } from "@mui/styles";

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
    <Swiper slidesPerView={1} pagination={{ clickable: true }} autoplay={true}>
      {topBanners.reverse().map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <a href={item.href} target="blank">
          <Image
            src={item.imageUrl}
            className={classes.image}
            lazyProps={{ width: "100%", height: "100%" }}
          />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopBannerCarousel;
