import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getDesignTokens, getThemedComponents } from "./Theme";
import { ColorModeContext } from "./contexts/color-context";
import DrawerLeft from "./pages/main_page/Main_Page";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    setMode(prefersDarkMode ? "light" : "dark");
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <PayPalScriptProvider options={{ "client-id": "AdH1ezK1Wuo1CiHwdxkuNilHfl5NYaOAkWqgzheVGQmA2bUoHjm3uCL4MLwwuMktNp_ZAtOHLoA-KQLG" }}>
          <BrowserRouter>
            <DrawerLeft></DrawerLeft>
          </BrowserRouter>
        </PayPalScriptProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
