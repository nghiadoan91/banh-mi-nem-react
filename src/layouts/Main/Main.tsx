import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Divider, Typography } from "@material-ui/core";
import { Topbar, Footer, Sidebar } from "./components";
import { Section } from "components/organisms";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  bigSection: {
    maxWidth: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.palette.primary.main
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

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const pages: PagesProps = {
    home: {
      title: "Trang Chủ",
      href: "/",
      id: "home-pages",
      children: {
        services: {
          groupTitle: "Services",
          pages: []
        },
        apps: {
          groupTitle: "Apps",
          pages: []
        },
        web: {
          groupTitle: "Web",
          pages: []
        }
      }
    },
    service: {
      title: "Dịch Vụ",
      href: "/service",
      id: "service-pages",
      children: {
        career: {
          groupTitle: "Career",
          pages: []
        },
        helpCenter: {
          groupTitle: "Help center",
          pages: []
        },
        company: {
          groupTitle: "Company",
          pages: []
        },
        contact: {
          groupTitle: "Contact",
          pages: []
        },
        blog: {
          groupTitle: "Blog",
          pages: []
        },
        portfolio: {
          groupTitle: "Portfolio",
          pages: []
        }
      }
    },
    catalog: {
      title: "Hàng Hot!",
      href: "/catalog",
      id: "catalog"
    },
    guide: {
      title: "Hướng Dẫn",
      href: "/guide",
      id: "guide",
      children: {
        howToOrder: {
          href: "/guide#how-to-order",
          title: "Cách đặt hàng"
        },
        howToCalculate: {
          href: "/guide#how-to-calculate",
          title: "Cách tính trọng lượng"
        }
      }
    },
    contact: {
      title: "Liên Hệ",
      href: "/contact",
      id: "contact"
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
            UShopBKK - Đang trong thời gian hoàn thiện website. Xin liên hệ với{" "}
            {""}
            <a href="https://www.facebook.com/profile.php?id=100061682892564">
              Facebook mình
            </a>
          </Typography>
        </Section>
      </Section>
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
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
