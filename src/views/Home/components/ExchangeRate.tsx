import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SectionHeader } from "components/molecules";
import {
  useMediaQuery,
  Typography,
  Button,
  Grid,
  colors
} from "@material-ui/core";
import { exchange_rate } from "Config";

const useStyles = makeStyles(theme => ({
  typed: {
    fontWeight: "bold"
  },
  gridItemBorder: {
    [theme.breakpoints.up("md")]: {
      borderRight: `1px solid ${colors.grey[200]}`
    }
  }
}));

const ExchangeRate = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const [exchangeRate, setExchangeRate] = useState<any>({});
  useEffect(() => {
    exchange_rate.on("value", snapshot => {
      if (snapshot.val() != null) {
        setExchangeRate(snapshot.val());
      }
    });
  }, []);
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <SectionHeader
          title={
            <span>
              <Typography component="span" variant="inherit" color="primary">
                {"Tỷ Giá THB - VND Ngày"}{" "}
                <Typography
                  component="span"
                  variant="inherit"
                  color="textPrimary"
                >
                  {exchangeRate.date}
                </Typography>
              </Typography>
            </span>
          }
        />
        <Grid item xs={12} sm={6} className={classes.gridItemBorder}>
          <SectionHeader
            title="THB -> VND"
            titleVariant="h6"
            subtitle={exchangeRate.thb_to_vnd}
            subtitleVariant="h4"
            subtitleColor="primary"
            disableGutter
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title="VND -> THB"
            titleVariant="h6"
            subtitle={exchangeRate.vnd_to_thb}
            subtitleVariant="h4"
            subtitleColor="secondary"
            disableGutter
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExchangeRate;
