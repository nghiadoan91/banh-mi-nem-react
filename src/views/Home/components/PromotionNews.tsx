import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@mui/styles";
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
} from "@mui/material";
import Link from "next/link";
import { FacebookEmbed } from '@vip30/react-social-media-embed';
import { useTranslation } from "react-i18next";
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
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
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const BlogContent = (props: any) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FacebookEmbed url={props.url} width={300} />
    </div>

  );
  return (
    <div>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              {t("News from us")}
            </Typography>
          </span>
        }
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {promotionNews.reverse().map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
            <BlogContent
                      url={item.url}
                    />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PromotionNews;
