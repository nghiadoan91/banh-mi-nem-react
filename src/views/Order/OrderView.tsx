import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section, SectionAlternate } from "../../components/organisms";
import { Image } from "components/atoms";
import { banhMiNemfireStore } from "Config";
import { CatalogShop } from "views/Catalog/components";
import { BranchDelivery, ContactChat } from "./components";

const useStyles = makeStyles(theme => {
  return {
    section: {
      paddingTop: 10,
      paddingBottom: 10
    },
    sectionAlternate: {
      paddingTop: 10,
      paddingBottom: 10
    }
  };
});

const OrderView = (): 
JSX.Element => {
  const [shops, setShops] = useState<any>([]);
  const [contact, setContact] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    banhMiNemfireStore
      .collection("BranchesPage")
      .doc("Config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setShops(result.data().shops);
          setContact(result.data().contactChat);
        }
      });
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      <Section key={99} className={classes.section}>
      <ContactChat commonShops={contact} />
            </Section>
      {shops.map((item: any, index: number) => {
        if(item.dGrabUrl != "" || item.dLineManUrl != "" || item.dRobinHoodUrl != ""){
          if (index % 2 === 1) {
            return (
              <Section key={index} className={classes.section}>
                <BranchDelivery commonShop={item} />
              </Section>
            );
          } else {
            return (
              <SectionAlternate
                disablePadding={true}
                key={index}
                className={classes.sectionAlternate}
              >
                <BranchDelivery commonShop={item} />
              </SectionAlternate>
            );
          }
        }
      })}
    </div>
  );
};

export default OrderView;

