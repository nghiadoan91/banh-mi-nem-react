import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem
} from "@mui/material";
import theme from '../../../../theme';

import { Image, Icon, IconText } from "../../../../components/atoms";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
    paddingBottom: 20,
    background: theme.palette.info.main
  },
  root2: {
    paddingTop: 40,
    paddingBottom: 20,
    background: theme.palette.info.main
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

  const service = pages.ourMenu;
  const catalog = pages.ourShop;
  const guide = pages.news;
  const contact = pages.contact;

  return (
    <>
      <div {...rest} className={clsx(classes.root2, className)}>
        <div className={classes.footerContainer}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={5} className={classes.gridContainerFooter}>
              <IconText fontIconClass="fas fa-home" title="Head office" />
              <Typography variant="body1">
                  92 Soi Ratchadaphisek 15, Khwaeng Dao Khanong, Khet Thon Buri Krung Thep Maha Nakhon 10600
                  </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <br></br>
            </Grid>
            <Grid item xs={12} md={5} className={classes.gridContainerFooter}>
              <IconText fontIconClass="fas fa-phone-alt" title="TEL." />
              <ul>
                <li>
                  <Typography variant="body1">
                    (+66) 096-004-5474
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    (+66) 0924-354-725
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
