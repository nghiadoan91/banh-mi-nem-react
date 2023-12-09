**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@mui/styles";
import { Grid } from "@mui/material";
import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardJobMinimal
        title={'Front-end developer'}
        subtitle={`Paris / Full time`}
    />
</ThemeProvider>
```

**With Extended Props Example**
```jsx
import React from "react";
import { ThemeProvider } from "@mui/styles";
import { Grid } from "@mui/material";
import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardJobMinimal
        title={'Front-end developer'}
        subtitle={`Paris / Full time`}
        showArrow
        titleProps={{
            variant: 'h6',
        }}
        subtitleProps={{
            variant: 'subtitle1',
        }}
    />
</ThemeProvider>
```