// MDFooter.stories.jsx
import React from "react";
import { MDFooter } from "../index";
import companyLogo from "./assets/medical-logo.webp";

export default {
  title: "MDFooter",
  component: MDFooter,
};

export const Default = () => (
  
  <MDFooter logo={companyLogo}>
    Add more MDFooterColumn components as needed
  </MDFooter>
);
