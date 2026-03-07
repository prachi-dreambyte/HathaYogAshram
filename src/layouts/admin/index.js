// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";

// Layout components
import Navbar from "../../components/admindashboard/navbar/NavbarAdmin";
import Sidebar from "../../components/admindashboard/sidebar/Sidebar";

import { SidebarContext } from "contexts/SidebarContext";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes.js";

// Dashboard Layout
export default function Dashboard(props) {
  const { ...rest } = props;

  // State
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const { onOpen } = useDisclosure();

  // Check route
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };

  // Get Active Route
  const getActiveRoute = (routesList) => {
    if (!routesList || !Array.isArray(routesList)) return "Default Brand Text";

    let activeRoute = "Default Brand Text";

    for (let i = 0; i < routesList.length; i++) {
      const route = routesList[i];

      if (route.collapse || route.category) {
        const nested = getActiveRoute(route.items);
        if (nested !== activeRoute) {
          return nested;
        }
      } else {
        if (
          window.location.href.indexOf(route.layout + route.path) !== -1
        ) {
          return route.name;
        }
      }
    }

    return activeRoute;
  };

  // Get Active Navbar
  const getActiveNavbar = (routesList) => {
    if (!routesList || !Array.isArray(routesList)) return false;

    let activeNavbar = false;

    for (let i = 0; i < routesList.length; i++) {
      const route = routesList[i];

      if (route.collapse || route.category) {
        const nested = getActiveNavbar(route.items);
        if (nested !== activeNavbar) {
          return nested;
        }
      } else {
        if (
          window.location.href.indexOf(route.layout + route.path) !== -1
        ) {
          return route.secondary;
        }
      }
    }

    return activeNavbar;
  };

  // Get Navbar Text
  const getActiveNavbarText = (routesList) => {
    if (!routesList || !Array.isArray(routesList)) return false;

    let activeNavbar = false;

    for (let i = 0; i < routesList.length; i++) {
      const route = routesList[i];

      if (route.collapse || route.category) {
        const nested = getActiveNavbarText(route.items);
        if (nested !== activeNavbar) {
          return nested;
        }
      } else {
        if (
          window.location.href.indexOf(route.layout + route.path) !== -1
        ) {
          return route.messageNavbar;
        }
      }
    }

    return activeNavbar;
  };

  // Generate Routes
  const getRoutes = (routesList) => {
    if (!routesList || !Array.isArray(routesList)) return null;

    return routesList.map((route, key) => {
      if (route.collapse || route.category) {
        return getRoutes(route.items);
      }

      if (route.layout === "/admin") {
        return (
          <Route
            path={route.path}
            element={route.component}
            key={key}
          />
        );
      }

      return null;
    });
  };

  document.documentElement.dir = "ltr";

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        {/* Sidebar */}
        <Sidebar routes={routes} display="none" {...rest} />

        {/* Main Content */}
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc(100% - 290px)" }}
          maxWidth={{ base: "100%", xl: "calc(100% - 290px)" }}
          transition="all 0.33s cubic-bezier(0.685,0.0473,0.346,1)"
          transitionDuration=".2s,.2s,.35s"
          transitionProperty="top,bottom,width"
          transitionTimingFunction="linear,linear,ease"
        >
          {/* Navbar */}
          <Portal>
            <Navbar
              onOpen={onOpen}
              logoText={"Horizon UI Dashboard PRO"}
              brandText={getActiveRoute(routes)}
              secondary={getActiveNavbar(routes)}
              message={getActiveNavbarText(routes)}
              fixed={fixed}
              {...rest}
            />
          </Portal>

          {/* Routes */}
          {getRoute() ? (
            <Box
              mx="auto"
              p={{ base: "20px", md: "30px" }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </Box>
          ) : null}
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}