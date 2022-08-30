import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SectionHeader } from "components/molecules";
import { CardProduct } from "components/organisms";
import { Image } from "components/atoms";
import {
  useMediaQuery,
  Typography,
  Button,
  Grid,
  colors,
  Divider,
  Avatar
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  blogContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    marginRight: theme.spacing(1)
  },
  cardProduct: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: theme.spacing(1),
    "& .card-product__content": {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  image: {
    objectFit: "fill",
    borderRadius: theme.spacing(0, 0, 10, 0)
  }
}));
const PromotionNews = ({ promotionNews }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const BlogMediaContent = (props: ImageProps) => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: "100%", height: "100%" }}
    />
  );
  const BlogContent = (props: any) => (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.subtitle}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          {/* <Avatar {...props.shop.photo} className={classes.avatar} /> */}
          <Typography variant="body2" color="textPrimary">
            {props.shop_name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {props.date}
        </Typography>
      </div>
    </div>
  );
  return (
    <div>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              Tin tức khuyến mãi
            </Typography>
          </span>
        }
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {promotionNews.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
            <Link href={item.href}>
              <a target="_blank">
                <CardProduct
                  withShadow
                  liftUp
                  className={classes.cardProduct}
                  mediaContent={
                    <BlogMediaContent
                      {...{ src: item.image }}
                      alt={item.title}
                    />
                  }
                  cardContent={
                    <BlogContent
                      title={item.title}
                      subtitle={item.subtitle}
                      shop_name={item.shop_name}
                      date={item.date}
                    />
                  }
                />
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PromotionNews;
