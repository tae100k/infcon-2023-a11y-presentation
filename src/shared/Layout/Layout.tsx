import {Box} from "@mui/material";
import {Navbar} from "../Navbar/Navbar";
import {Copyright} from "../Copyright/Copyright";
import React from "react";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Box bgcolor="#e7e2df" pb="64px" height="100%">
      <Navbar />
      {children}
      <Copyright />
    </Box>
  );
};
