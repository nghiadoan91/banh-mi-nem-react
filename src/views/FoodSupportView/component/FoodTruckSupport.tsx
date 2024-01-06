import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { SectionHeader } from "components/molecules";
import { Image } from "components/atoms";
import {
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from '../../../theme';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const useStyles = makeStyles(() => ({

}));
const FoodTruckSupport = ({ foodTrucks }): JSX.Element => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  return (
    <div>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              {"Food Truck"}
            </Typography>
          </span>
        }
      />
      <Tabs>
        <TabList>
          {foodTrucks.map((item: any, index: number) => (
            <Tab>{item.title}</Tab>
          ))}

        </TabList>
        {foodTrucks.map((item: any, index: number) => (
          <TabPanel>

            <Image
              src={item.image}
            />
          </TabPanel>
        ))}


      </Tabs>

    </div>
  );
};

export default FoodTruckSupport;
