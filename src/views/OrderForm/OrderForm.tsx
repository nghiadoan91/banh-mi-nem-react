import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "../../components/organisms";
import { Hero } from "./components";
import Form from "./components/Form";

const useStyles = makeStyles(theme => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    formContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: `calc(100vh - ${toolbar["@media (min-width:600px)"].minHeight}px)`,
      maxWidth: 500,
      margin: `0 auto`
    },
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

const NotFound = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Section>
        <Form/>
      </Section>
    </div>
  );
};

export default NotFound;
