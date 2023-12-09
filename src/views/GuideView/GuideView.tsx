import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section, SectionAlternate } from "../../components/organisms";
import { Image } from "components/atoms";
import { banhMiNemfireStore } from "Config";
import { CatalogShop } from "views/Catalog/components";
import theme from '../../theme';

const useStyles = makeStyles(() => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    section: {
      paddingTop: 10,
      paddingBottom: 10
    },
    sectionAlternate: {
      paddingTop: 10,
      paddingBottom: 10
    },
    image: {
      objectFit: "cover",
      width: '100%',
      align: "center",
      alignItems: "center"
    }
  };
});

const GuideView = (): 
JSX.Element => {
  const [menus, setMenus] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    banhMiNemfireStore
      .collection("MenuPage")
      .doc("Config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setMenus(result.data().menus);
        }
      });
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      {menus.map((item: any, index: number) => {
        if (index % 2 === 0) {
          return (
            <Section key={index} className={classes.section}>
              <div>
                <SectionHeader title={item.title} align="center" />
                <Image className={classes.image}
                   src={item.image}
                />
              </div>
            </Section>
          );
        } else {
          return (
            <SectionAlternate
              disablePadding={true}
              key={index}
              className={classes.sectionAlternate}
            >
              <div>
                <SectionHeader title={item.title} align="center" />
                <Image className={classes.image}
                  src={item.image}
                />
              </div>
            </SectionAlternate>
          );
        }
      })}
    </div>
  );
};

export default GuideView;

