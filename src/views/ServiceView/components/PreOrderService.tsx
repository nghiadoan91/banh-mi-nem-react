import React, { useState, useEffect } from "react";
import {
  useMediaQuery,
  Typography,
  Button,
  Grid,
  colors,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { SectionHeader, IconAlternate } from "components/molecules";
import { DescriptionListIcon } from "components/organisms";
import { Icon } from "components/atoms";
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  checkBox: {
    background: "transparent",
    borderRadius: 0,
    width: 20,
    height: 20
  },
  title: {
    fontWeight: "bold"
  },
  list: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(1)
    }
  },
  gridwithMargin: {
    marginLeft: 6,
    marginRight: 6
  }
}));
const PreOrderService = (): JSX.Element => {
  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  return (
    <div>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              Đặt hàng
            </Typography>
          </span>
        }
        fadeUp
      />
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3} container justifySelf="center">
          <IconAlternate
            size="large"
            color={colors.red}
            fontIconClass="fas fa-shopping-cart"
          />
        </Grid>
        <Grid item xs={9} sm={9}>
          <SectionHeader
            title="Dành cho khách hàng có nhu cầu hỗ trợ đặt hàng từ Thái Lan đến vận chuyển về Việt Nam, và chi phí vận chuyển tại Thái Lan theo thực tế"
            subtitle=""
            align="left"
            titleProps={{
              variant: "body1",
              color: "textPrimary"
            }}
            subtitleProps={{
              color: "textPrimary"
            }}
            disableGutter
          />
          <SectionHeader
            title="Chi phí được tính theo trọng lượng thực tế của hàng hoá (kg) và thanh toán 2 lần"
            subtitle=""
            align="left"
            titleProps={{
              variant: "body1",
              color: "textPrimary"
            }}
            subtitleProps={{
              color: "textPrimary"
            }}
            disableGutter
          />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} container justifySelf="center"></Grid>
          <Grid item xs={12} sm={9} container justifySelf="center">
            <div className={classes.gridwithMargin}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography
                    className={classes.title}
                    component="span"
                    variant="h6"
                    color="secondary"
                  >
                    {"Thanh toán lần 1: "}
                  </Typography>
                  <Typography component="span" variant="h6" color="textPrimary">
                    Phí hàng hoá x tỷ giá
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    className={classes.title}
                    component="span"
                    variant="h6"
                    color="secondary"
                  >
                    {"Thanh toán lần 2: "}
                  </Typography>
                  <Typography component="span" variant="h6" color="textPrimary">
                    Cước phí (nội địa TL + quốc tế + nội địa VN)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={11}>
                  <Grid item xs={12} sm={12}>
                    <Typography
                      component="span"
                      variant="body1"
                      color="textPrimary"
                    >
                      Chi tiết:
                    </Typography>
                  </Grid>
                  <List className={classes.list}>
                    <ListItem disableGutters>
                      <ListItemAvatar>
                        <Avatar
                          src="/assets/images/shapes/check-icon-yellow.svg"
                          className={classes.checkBox}
                        />
                      </ListItemAvatar>
                      <Typography variant="body1" color="textPrimary">
                        Cước phí nội địa tại Thái Lan: theo thực tế theo nhà
                        cung cấp hoặc nhà máy bên Thái Lan.
                      </Typography>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemAvatar>
                        <Avatar
                          src="/assets/images/shapes/check-icon-yellow.svg"
                          className={classes.checkBox}
                        />
                      </ListItemAvatar>
                      <Typography variant="body1" color="textPrimary">
                        Cước phí quốc tế : được tính theo trọng lượng thực tế x
                        giá vận chuyển theo bảng báo giá. Tối thiểu
                        300,000vnd/lần
                      </Typography>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemAvatar>
                        <Avatar
                          src="/assets/images/shapes/check-icon-yellow.svg"
                          className={classes.checkBox}
                        />
                      </ListItemAvatar>
                      <Typography variant="body1" color="textPrimary">
                        Cước phí nội địa tại VN: được tính theo thực tế theo các
                        đơn vị vận chuyển + phí phục vụ 50,000vnd/lần. Trường
                        hợp khách tự đến nhận hàng thì sẽ không có chi phí.
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PreOrderService;
