**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@mui/styles";
import { Button } from "@mui/material"

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <DescriptionCta
        title="Apply in 15 minutes"
        subtitle="Get your dream job without the hassle."
        primaryCta={<Button variant="outlined" color="primary" size="large">Learn More</Button>}
        secondaryCta={<Button variant="contained" color="primary" size="large">Apply now</Button>}
        align="left"
    />
</ThemeProvider>