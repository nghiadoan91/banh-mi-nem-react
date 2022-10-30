/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { IconText, Image } from "../../../../../../components/atoms";

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 30,
    marginRight: 30
  },
  listItemButton: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  navLink: {
    fontWeight: 300,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  imageText: {
    marginLeft: theme.spacing(1)
  },
  listItemIcon: {
    minWidth: "auto"
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer"
  },
  menu: {
    display: "flex"
  },
  menuItem: {
    marginRight: theme.spacing(8),
    "&:last-child": {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: "uppercase"
  },
  divider: {
    width: "100%"
  }
}));

interface Props {
  className?: string;
  onClose: Function;
  pages: PagesProps;
}

const SidebarNav = ({
  pages,
  onClose,
  className,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles();

  const home = pages.home;
  const service = pages.ourMenu;
  const catalog = pages.ourShop;
  const guide = pages.language;
  const contact = pages.contact;

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      {[home, service, catalog, guide, contact].map((page, i) => (
        <ListItem className={classes.listItem}>
          <Typography
            component={"a"}
            href={page.href}
            variant="h6"
            color="textPrimary"
            gutterBottom
          >
            {page.title}
          </Typography>
        </ListItem>
      ))}
      <ListItem>
        <IconText
          fontIconClass="fas fa-phone-alt"
          color="textSecondary"
          title="0902-234-786"
        />
      </ListItem>
      <ListItem className={classes.listItemButton}>
        <Button onClick={() => onClose()}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          href="#link-to-order"
        >
          Order Now
        </Button>
      </ListItem>
    </List>
  );
};

export default SidebarNav;
