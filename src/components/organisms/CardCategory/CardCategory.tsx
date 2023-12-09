import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { CardBase, DescriptionListIcon } from "../../organisms";
import theme from "../../../theme";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    background: theme.palette.background.default,
  },
  "image": {
    placeItems: "center",
    display: "grid",
  },
}));

/**
 * Component to display the category card
 *
 * @param {Object} props
 */
const CardCategory = ({
  icon,
  title,
  noPadding,
  align = "center",
  className,
  ...rest
}: CardCategoryProps): JSX.Element => {
  const classes = useStyles();

  return (
    <CardBase
      noPadding={noPadding}
      className={clsx(classes.root, classes.image, className)}
      {...rest}
    >
      <DescriptionListIcon icon={icon} title={title} align={align} className={classes.image} />
    </CardBase>
  );
};

export default CardCategory;
