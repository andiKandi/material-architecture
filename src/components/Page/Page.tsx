import React, { createContext, useMemo } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { turnDark, turnLight } from "../../store/themeSlice";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { blueGrey, deepOrange } from "@mui/material/colors";
import "./Page.scss";

interface PageProps {
  children: React.ReactNode;
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: blueGrey[900] },
          divider: blueGrey[200],
          text: {
            primary: blueGrey[900],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: blueGrey[50],
            secondary: blueGrey[500],
          },
        }),
  },
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const Page: React.FC<PageProps> = ({ children }) => {
  const mode = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        mode === "light" ? dispatch(turnDark()) : dispatch(turnLight());
      },
    }),
    [mode, dispatch]
  );

  // Update the theme only if the mode changes
  // @ts-ignore TODO: set correct type!
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
