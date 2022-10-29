import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section } from "../../components/organisms";
import { Image } from "components/atoms";

const useStyles = makeStyles(theme => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    section: {
      paddingTop: 0,
      paddingBottom: 0,
      alignItems: "center"
    },
    image: {
      objectFit: "cover",
      width: '100%',
      align: "center",
      alignItems: "center"
    }
  };
});

const GuideView = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      if (location.hash) location = location;
    }, 200);
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      <Section className={classes.section}>
        <>
          <Image className={classes.image}
            src="https://i.pinimg.com/originals/e4/83/7f/e4837f4ec07e6bf89e9dcad050c47f30.jpg"
          />
          <Image className={classes.image}
            src="https://i.pinimg.com/originals/a8/50/39/a8503976f868adf604fa934464e1888e.jpg"
          />
       </>
      </Section>
    </div>
  );
};

export default GuideView;
