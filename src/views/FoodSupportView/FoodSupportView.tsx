import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { SectionHeader } from "../../components/molecules";
import { Section, SectionAlternate } from "../../components/organisms";
import { Image } from "components/atoms";
import { banhMiNemfireStore } from "Config";
import { ContactChat } from "views/Order/components";
import { PromotionNews } from "views/Home/components";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import theme from '../../theme';
import { t } from "i18next";
import FoodTruckSupport from "./component/FoodTruckSupport";
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
  const [contact, setContact] = useState<any>([]);
  const[facebookPosts, setFacebookPosts] = useState<any>([]);
  const[foodTruck, setfoodTrucks] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    banhMiNemfireStore
      .collection("FoodSupportPage")
      .doc("Config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setMenus(result.data().menus);
          setFacebookPosts(result.data().facebookPosts);
          setfoodTrucks(result.data().foodTruck);
          console.log("facebookPosts", result.data().facebookPosts);
        }
      });
      banhMiNemfireStore
      .collection("BranchesPage")
      .doc("Config")
      .get()
      .then(result => {
        if (result.data() != null) {
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
      
      <Section key={99} className={classes.section}>
        <ContactChat commonShops={contact} />
      </Section>
      <Section>
      <FoodTruckSupport foodTrucks={foodTruck}/>
      </Section>
      <Section>
        <PromotionNews promotionNews={facebookPosts} title={ t("Our Work")} />
      </Section>

      
    </div>
  );
};

export default GuideView;

