import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { CardBase } from "components/organisms";
import {
  useMediaQuery,
  Grid,
  Button,
  Typography,
  colors
} from "@material-ui/core";
import { SectionHeader, IconAlternate } from "components/molecules";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontWeight: 700,
  },
  sectionHeadlineStars: {
    maxWidth: 120
  }
}));

const Reviews = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const CardReview = ({
    href,
    icon,
    title,
    text,
    authorPhoto,
    authorName,
    authorTitle,
    align = "center",
    textVariant = "h6",
    className,
    textProps = {},
    listItemPrimaryTypographyProps = {},
    listItemSecondaryTypographyProps = {},
    ...rest
  }: any) => (
    <>
      <CardBase
        className={clsx("card-review", classes.root, className)}
        {...rest}
        liftUp
        variant="outlined"
      >
        <Grid container spacing={2} className="card-review__wrapper">
          <Grid
            item
            container
            justify="center"
            xs={12}
            className="card-review__icon-wrapper"
          >
            {icon}
          </Grid>
          <Grid item xs={12} className="card-review__text-wrapper">
            <Typography
              variant="h6"
              color="textPrimary"
              align={align}
              className={clsx(classes.title, "description-list-icon__title")}
            >
              {title}
            </Typography>
            <Typography
              variant={textVariant}
              align={align}
              component="p"
              {...textProps}
            >
              {text}
            </Typography>
          </Grid>
          <Grid item xs={12} className="card-review__lits-container">
            <Grid
              container
              justify="center"
              className="card-review__list-wrapper"
            ></Grid>
          </Grid>
        </Grid>
        <Link href={`#${href}`}>
          <Button
            variant="outlined"
            size={isMd ? "large" : "medium"}
            color="primary"
          >
            Xem chi tiết
          </Button>
        </Link>
      </CardBase>
    </>
  );

  const data = [
    {
      id: "transport-section",
      icon: "fas fa-truck",
      title: "Vận chuyển",
      description: "Dành cho khách hàng có nhu cầu vận chuyển hàng Thái Lan"
    },
    {
      id: "order-section",
      icon: "fas fa-shopping-cart",
      title: "Đặt hàng",
      description:
        "Dành cho khách hàng có nhu cầu hỗ trợ mua hàng tại Thái Lan và vận chuyển về VN"
    },
    {
      id: "exchange-section",
      icon: "fas fa-money-bill-alt",
      title: "Đổi tiền",
      description:
        "Dành cho khách hàng có nhu cầu chuyển tiện THB <=> VND hoặc thanh toán hộ tại Thái"
    }
  ];

  return (
    <div className={className} {...rest}>
      {/* <SectionHeader
        title={
          <span>
            <Typography color="secondary" variant="inherit" component="span">
              Dịch vụ
            </Typography>
          </span>
        }
        align="center"
      /> */}
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((service: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            md={4}
            data-aos="fade-up"
          >
            <CardReview
              variant="outlined"
              title={service.title}
              text={service.description}
              href={service.id}
              icon={
                <IconAlternate
                  color={colors.red}
                  fontIconClass={service.icon}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Reviews;
