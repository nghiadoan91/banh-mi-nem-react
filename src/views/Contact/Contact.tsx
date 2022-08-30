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

const Contact = (): JSX.Element => {
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
            src="https://i.pinimg.com/originals/e9/9d/63/e99d63e094c65626951eee32d0c39bb0.png"
          />
        </>
      </Section>
    </div>
  );
};

export default Contact;
