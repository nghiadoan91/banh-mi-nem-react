import React, { useState } from "react";
import clsx from "clsx";

import { makeStyles, useTheme } from "@mui/styles";
import { useMediaQuery, Divider, Typography } from "@mui/material";
import { Topbar, Footer, Sidebar } from "./components";
import { Section } from "components/organisms";
import { useTranslation } from 'react-i18next';
import theme from '../../theme';

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
const { t, i18n } = useTranslation();
const useStyles = makeStyles(() => ({
  root: {
    height: "100%"
  },
  bigSection: {
    maxWidth: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.palette.primary.main
  },
  navSection: {
    maxWidth: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: theme.palette.secondary.main
  },
  smallSection: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: theme.palette.primary.main,
    alignItems: "center"
  },
  topText: {
    flexGrow: 1,
    alignSelf: "center",
    color: "white"
  }
}));
  const classes = useStyles();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const pages: PagesProps = {
    home: {
      title: t('Home'),
      href: "/",
      id: "home-pages"
    },
    ourMenu: {
      title: t('Our Menu'),
      href: "/menu",
      id: "menu"
    },
    ourShop: {
      title: t('Food Support'),
      href: "/food-support",
      id: "catalog"
    },
    news: {
      title: t('News'),
      href: "https://www.facebook.com/banhminem",
      id: "news"
    },
    contact: {
      title: t("Contact us"),
      href: "/contact",
      id: "contact"
    },
    language: {
      title: t("Language"),
      href:"/",
      id:"language",
      children:{
        en:{
          id: "en",
          href:"/en",
          title:"English"
        },
        th:{
          id: "th",
          href:"/th",
          title:"Thai"
        },
        vn:{
          id: "vn",
          href:"/vn",
          title:"Vietnamese"
        }
      }
    }
  };

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <Section className={classes.bigSection}>
        <Section className={classes.smallSection}>
          <Typography className={classes.topText} component="h6" align="center">
            {t("Check out our ")}
            <a href="https://www.facebook.com/banhminem">
              Facebook Banh mi NEM
            </a>
            {t(" for news and update related to our shops")}
          </Typography>
        </Section>
      </Section>
      <Section className={classes.navSection}>
        <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      </Section>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

export default Main;
