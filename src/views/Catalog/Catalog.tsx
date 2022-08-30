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
  const [catalogList, setCatalogList] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    uShopBKKfireStore
      .collection("homepage")
      .doc("catalog")
      .get()
      .then(result => {
        if (result.data() != null) {
          setCatalogList(result.data().catalogList);
        }
      });
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      {catalogList.map((item: any, index: number) => {
        if (index % 2 === 0) {
          return (
            <Section key={index} className={classes.section}>
              <CatalogShop title={item.title} commonShops={item.shops} />
            </Section>
          );
        } else {
          return (
            <SectionAlternate
              disablePadding={true}
              key={index}
              className={classes.sectionAlternate}
            >
              <CatalogShop title={item.title} commonShops={item.shops} />
            </SectionAlternate>
          );
        }
      })}
    </div>
  );
};

export default Cataglog;
