import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    background: `url(/assets/images/servicepage/hero/contact-cover.svg) no-repeat #BC2248`,
    overflow: "hidden",
    minHeight: 400,
    [theme.breakpoints.up("md")]: {
      backgroundPosition: "right -400px top"
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "right -250px top"
    }
  },
  textWhite: {
    color: "white"
  },
  title: {
    fontWeight: "bold"
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingTop: 0,
    paddingBottom: 0
  },
  sectionHeader: {
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  }
}));

const Hero = ({ className, ...rest }: any): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title="Dịch vụ"
          subtitle="Hãy cùng trải nghiêm những dịch vụ uy tín từ UShopBKK"
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: "h3"
          }}
          subtitleProps={{
            className: classes.textWhite
          }}
          className={classes.sectionHeader}
        />
      </Section>
    </div>
  );
};

export default Hero;
