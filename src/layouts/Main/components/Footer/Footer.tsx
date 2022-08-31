import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem
} from "@material-ui/core";

import { Image, Icon, IconText } from "../../../../components/atoms";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 40,
    paddingBottom: 20,
    background: theme.palette.background.footer
  },
  root2: {
    paddingTop: 40,
    paddingBottom: 20,
    background: theme.palette.background.footer2
  },
  footerContainer: {
    maxWidth: 1236,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8)
    }
  },
  logoContainerItem: {
    paddingTop: 0
  },
  logoContainer: {
    width: 120,
    height: 32
  },
  logoImage: {
    width: "100%",
    height: "100%"
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1)
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent"
    },
    "&:last-child": {
      marginRight: 0
    }
  },
  icon: {
    fontSize: 24
  },
  phoneNumber: {
    fontSize: 20,
    paddingLeft: 8,
    color: "white"
  },
  menuListContainer: {
    marginTop: 20,
    padding: "0 !important"
  },
  menu: {
    display: "flex"
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0
    }
  },
  menuGroupTitle: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 6
    },
    textTransform: "uppercase",
    color: "white",
    padding: "20px"
  },
  divider: {
    width: "100%"
  },
  navLink: {
    color: "white"
  },
  gridContainerFooter: {
    padding: 20
  }
}));

interface Props {
  className?: string;
  pages: PagesProps;
}

const Footer = ({ pages, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  const service = pages.service;
  const catalog = pages.catalog;
  const guide = pages.guide;
  const contact = pages.contact;

  return (
    <>
      <div {...rest} className={clsx(classes.root, className)}>
        <div className={classes.footerContainer}>
          <Grid container spacing={0}>
            <Grid item xs={6} md={2}>
              <List disablePadding>
                <ListItem disableGutters className={classes.logoContainerItem}>
                  <div className={classes.logoContainer}>
                    <a href="/" title="U Shop BKK">
                      <Image
                        className={classes.logoImage}
                        src="/assets/images/logos/ushopbkk-logo.png"
                        alt="U Shop BKK"
                        lazy={false}
                      />
                    </a>
                  </div>
                </ListItem>
                <ListItem disableGutters>
                  <IconButton className={classes.socialIcon}>
                    <Image
                      id="zalo"
                      src="/assets/images/logos/zalo.png"
                      lazyProps={{ height: 30, width: 30 }}
                    />
                  </IconButton>
                  <IconButton className={classes.socialIcon}>
                    <Image
                      id="facebook-messenger"
                      src="/assets/images/logos/facebook-messenger.svg"
                      lazyProps={{ height: 30, width: 30 }}
                    />
                  </IconButton>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={10} className={classes.menuListContainer}>
              <Grid container spacing={0}>
                {[service, catalog, guide].map((page, i) => (
                  <List key={i}>
                    <ListItem
                      disableGutters
                      key={i}
                      className={classes.menuGroupTitle}
                    >
                      <div key={page.id}>
                        <Typography
                          variant="body2"
                          component={"a"}
                          href={page.href}
                          className={clsx(classes.navLink, "submenu-item")}
                        >
                          {page.title}
                        </Typography>
                      </div>
                    </ListItem>
                  </List>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div {...rest} className={clsx(classes.root2, className)}>
        <div className={classes.footerContainer}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={5} className={classes.gridContainerFooter}>
              <IconText fontIconClass="fas fa-home" title="Address" />
              <ul>
                <li>
                  <Typography variant="body1">
                    106/10 Đỗ Năng Tế, An Lạc A, Bình Tân, HCM
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    198/127 Narathiwas Rd., Chongnonsi, Yannawa, BANGKOK 10120
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={2}>
              <br></br>
            </Grid>
            <Grid item xs={12} md={5} className={classes.gridContainerFooter}>
              <IconText fontIconClass="fas fa-phone-alt" title="TEL." />
              <ul>
                <li>
                  <Typography variant="body1">
                    Việt Nam: (+84) 0902-234-786
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Thái Lan: (+66) 0924-354-725
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
