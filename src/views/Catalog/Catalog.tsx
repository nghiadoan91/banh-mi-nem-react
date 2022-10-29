import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { uShopBKKfireStore } from "Config";
import { Section, SectionAlternate } from "components/organisms";
import { CatalogShop } from "./components";

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

const Cataglog = (): JSX.Element => {
  const [shops, setShops] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    uShopBKKfireStore
      .collection("BranchesPage")
      .doc("Config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setShops(result.data().shops);
        }
      });
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      {shops.map((item: any, index: number) => {
        if (index % 2 === 0) {
          return (
            <Section key={index} className={classes.section}>
              <CatalogShop commonShop={item} />
            </Section>
          );
        } else {
          return (
            <SectionAlternate
              disablePadding={true}
              key={index}
              className={classes.sectionAlternate}
            >
              <CatalogShop commonShop={item} />
            </SectionAlternate>
          );
        }
      })}
    </div>
  );
};

export default Cataglog;
