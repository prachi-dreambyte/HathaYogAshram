import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/navigations/Header";
import Footer from "components/navigations/Footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
