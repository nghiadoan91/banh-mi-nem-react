import React from "react";
import { makeStyles } from "@mui/styles";
import { Section, SectionAlternate } from "../../components/organisms";
import theme from '../../theme';
import {
  ServiceListWithIcon,
  Hero,
  PreOrderService,
  ExchangeMoneyService,
  ShippingService
} from "./components";

const useStyles = makeStyles(() => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    formContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: `calc(100vh - ${toolbar["@media (min-width:600px)"].minHeight}px)`,
      maxWidth: 500,
      margin: `0 auto`
    },
    section: {
      paddingTop: 0,
      paddingBottom: 0
    },
    label: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  };
});

const ServiceView = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate>
        <ServiceListWithIcon />
      </SectionAlternate>
      <Section id="order-section">
        <PreOrderService />
      </Section>
      <SectionAlternate id="exchange-section">
        <ExchangeMoneyService />
      </SectionAlternate>
      <Section id="transport-section">
        <ShippingService />
      </Section>
    </div>
  );
};

export default ServiceView;
