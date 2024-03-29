import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import { useMediaQuery, Typography, Button, Grid } from "@mui/material";
import { SectionHeader } from "components/molecules";
import { DescriptionListIcon } from "components/organisms";
import { Icon } from "components/atoms";
import Link from "next/link";
import { makeStyles } from '@mui/styles';
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  section: {
    paddingTop: 20
}
}));

const Services = ({ advantages }): JSX.Element => {
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.section} container spacing={4}>
        {advantages.map((item: any, index: number) => (
          <Grid key={index} item xs={6} sm={6} md={3} data-aos="fade-up">
            <DescriptionListIcon
              title={item.title}
              subtitle={item.subTitle}
              titleVariant="h1"
              subtitleVariant="body1"
              icon={
                <Icon
                  fontIconClass={item.icon}
                  size="large"
                  fontIconColor={theme.palette.primary.main}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
