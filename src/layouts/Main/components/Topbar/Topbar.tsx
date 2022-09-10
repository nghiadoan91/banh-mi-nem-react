import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
  ListItemIcon,
  Popover
} from "@material-ui/core";
import { IconText } from "../../../../components/atoms";
import MenuIcon from "@material-ui/icons/Menu";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Image } from "../../../../components/atoms";
import { isLightMode } from "../../../../utils/utils";
import Link from "next/link";
import i18n from'../../../../../localization/translationUtils';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toolbar: {
    zIndex: 999,
    maxWidth: 1236,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8)
    }
  },
  navLink: {
    fontWeight: 300,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0
    }
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark
    }
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(1),
    whiteSpace: "nowrap"
  },
  listItemButton: {
    whiteSpace: "nowrap"
  },
  listItemIcon: {
    minWidth: "auto"
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2)
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent"
    }
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark
  },
  logoContainer: {
    width: 40,
    height: 40,
    [theme.breakpoints.up("md")]: {
      width: 40,
      height: 40
    }
  },
  logoImage: {
    width: "100%",
    height: "100%"
  },
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuItem: {
    marginRight: theme.spacing(0),
    "&:last-child": {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: "uppercase"
  }
}));

interface Props {
  className?: string;
  onSidebarOpen: Function;
  pages: PagesProps;
}

const Topbar = ({
  className,
  onSidebarOpen,
  pages,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();
  const [isLightModeTheme, setLightModeTheme] = useState<boolean>(false);
  const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    popoverId: string | null
  ): void => {
    console.log(popoverId);
    console.log(event.target);
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };
  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language)
  };
  useEffect(() => {
    setLightModeTheme(isLightMode());
  }, []);

  const home = pages.home;
  const service = pages.aboutUs;
  const catalog = pages.ourShop;
  const guide = pages.news;
  const contact = pages.contact;
  const language = pages.language;
  const RenderPageNoDropDown = ({ page }): JSX.Element => {
    return (
      <div>
        <ListItem className={clsx(classes.listItem, "menu-item--no-dropdown")}>
          <Link href={page.href}>
            <Typography
              variant="body1"
              className={classes.listItemText}
              color="textSecondary"
            >
              {page.title}
            </Typography>
          </Link>
        </ListItem>
      </div>
    );
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="U Shop BKK">
          <Image
            className={classes.logoImage}
            src={
              isLightModeTheme
                ? "/assets/images/logos/BanhMiNemLogo.png"
                : "/assets/images/logos/BanhMiNemLogo.png"
            }
            alt="U Shop BKK"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          {[home, service, catalog, guide].map((page, i) => (
            <div key={i}>
              <RenderPageNoDropDown page={page} />
            </div>
          ))}
          {[contact].map((page, i) => (
            <div key={i}>
              <RenderPageNoDropDown page={page} />
            </div>
          ))}
          {[language].map((page, i) => (
            <div key={i}>
              <ListItem
                id={page.id}
                aria-describedby={page.id}
                onClick={e => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : ""
                )}
              >
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={clsx(classes.listItemText, "menu-item")}
                >
                  {page.title}
                </Typography>
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === page.id ? classes.expandOpen : ""
                    }
                    fontSize="small"
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={page.id}
                open={openedPopoverId === page.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                classes={{ paper: classes.popover }}
              >
                <div>
                  <div className={classes.menu}>
                    <div className={classes.menuItem}>
                      <List disablePadding>
                        <ListItem
                          disableGutters
                          className={classes.menuGroupItem}
                        >
                          <div>
                            <Typography
                              variant="body1"
                              className={clsx(classes.navLink, "submenu-item")}
                              color="textSecondary"
                              onClick={()=>{changeLanguage("en")}}
                            >
                              {page.children.en.title}
                            </Typography>
                          </div>

                        </ListItem>
                        <ListItem
                          disableGutters
                          className={classes.menuGroupItem}
                        >
                          <div>
                            <Typography
                              variant="body1"
                              className={clsx(classes.navLink, "submenu-item")}
                              color="textSecondary"
                              onClick={()=>changeLanguage("th")}
                            >
                              {page.children.th.title}
                            </Typography>
                          </div>
                        </ListItem>
                        <ListItem
                          disableGutters
                          className={classes.menuGroupItem}
                        >
                          <div>
                            <Typography
                              variant="body1"
                              className={clsx(classes.navLink, "submenu-item")}
                              color="textSecondary"
                              onClick={()=>changeLanguage("vn")}
                            >
                              {page.children.vn.title}
                            </Typography>
                          </div>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          ))}
          <ListItem>
            <IconText
              fontIconClass="fas fa-phone-alt"
              color="textSecondary"
              title="096-004-5474"
            />
          </ListItem>
          <ListItem>
            <a href="/" title="Zalo">
              <Image
                id="zalo"
                src="/assets/images/logos/zalo.svg"
                lazyProps={{ height: 30, width: 30 }}
              />
            </a>
          </ListItem>
          <ListItem>
            <a href="/" title="Facebook">
              <Image
                id="facebook-messenger"
                src="/assets/images/logos/facebook-messenger.svg"
                lazyProps={{ height: 30, width: 30 }}
              />
            </a>
          </ListItem>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              component="a"
              href="/order-form"
              className={classes.listItemButton}
            >
              Đặt Hàng
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

export default Topbar;
