import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";

const AppLayout = () => {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
