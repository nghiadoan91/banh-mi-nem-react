import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  root: {
    background: theme.palette.background.default,
    padding: 0
  },
  inner: {
    maxWidth: 1236,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8, 8)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 8)
    }
  },
  innerNarrowed: {
    maxWidth: 800
  }
}));

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = ({
  children,
  innerNarrowed,
  className,
  disablePadding,
  ...rest
}: SectionAlternateProps): JSX.Element => {
  const classes = useStyles();

  return (
    <section
      className={clsx("section-alternate", classes.root, className)}
      {...rest}
    >
      <div
        className={clsx(
          "section-alternate__content",
          classes.inner,
          className,
          innerNarrowed ? classes.innerNarrowed : {}
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionAlternate;
