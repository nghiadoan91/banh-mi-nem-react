**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@mui/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CountUpNumber end={458} suffix="K" label="Placement" />
</ThemeProvider>