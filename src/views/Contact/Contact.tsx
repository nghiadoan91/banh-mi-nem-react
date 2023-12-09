import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section } from "../../components/organisms";
import { Image } from "components/atoms";
import theme from '../../theme';

const useStyles = makeStyles(() => {
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1007324281045!2d100.47543941582384!3d13.712348501898632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298673e185801%3A0x783505ee6af4ce87!2s92%20Soi%20Ratchadaphisek%2015%2C%20Khwaeng%20Dao%20Khanong%2C%20Khet%20Thon%20Buri%2C%20Krung%20Thep%20Maha%20Nakhon%2010600!5e0!3m2!1sen!2sth!4v1662827833495!5m2!1sen!2sth" width="100%" height="450" style={{border:0}} loading="lazy"></iframe>
        </>
      </Section>
    </div>
  );
};

export default Contact;
