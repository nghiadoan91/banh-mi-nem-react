import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section } from "../../components/organisms";
import { Image } from "components/atoms";

const useStyles = makeStyles(theme => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    section: {
      paddingTop: 0,
      paddingBottom: 0
    },
    label: {
      fontWeight: "bold",
      textTransform: "uppercase"
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
          <Image
            id="how-to-order"
            src="https://i.pinimg.com/originals/08/9f/54/089f54a4e05b1a54860e55b699362373.jpg"
          />
          <Image
            id="how-to-calculate"
            src="https://i.pinimg.com/originals/59/28/d9/5928d9aeedef924a0cc851c7ef14154e.jpg"
          />
        </>
      </Section>
    </div>
  );
};

export default GuideView;
