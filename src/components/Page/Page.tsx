import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import "./Page.scss";

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#191818",
      },
      secondary: {
        main: "#C99E60",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};
