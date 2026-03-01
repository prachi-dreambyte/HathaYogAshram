/* eslint-disable */
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

export function SidebarLinks(props) {
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue("secondaryGray.600", "secondaryGray.600");
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  // Track which collapse menus are open
  const [openCollapse, setOpenCollapse] = useState({});

  const toggleCollapse = (index) => {
    setOpenCollapse((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // Check if any child route is active (to auto-highlight parent)
  const activeParent = (items) => {
    return items?.some((item) => location.pathname.includes(item.path));
  };

  const createLinks = (routes, depth = 0) => {
    return routes.map((route, index) => {
      // Category header (unchanged)
      if (route.category) {
        return (
          <React.Fragment key={index}>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{ sm: "10px", xl: "16px" }}
              pt="18px"
              pb="12px"
            >
              {route.name}
            </Text>
            {createLinks(route.items, depth)}
          </React.Fragment>
        );
      }

      // Collapsible parent route
      if (route.collapse && route.items) {
        const isOpen = openCollapse[`${depth}-${index}`];
        const isParentActive = activeParent(route.items);

        return (
          <Box key={index}>
            {/* Parent row — clickable to toggle, not a NavLink */}
            <Box
              onClick={() => toggleCollapse(`${depth}-${index}`)}
              cursor="pointer"
            >
              <HStack
                spacing={isParentActive ? "22px" : "26px"}
                py="5px"
                ps="10px"
              >
                <Flex w="100%" alignItems="center" justifyContent="center">
                  <Box
                    color={isParentActive ? activeIcon : textColor}
                    me="18px"
                  >
                    {route.icon}
                  </Box>
                  <Text
                    me="auto"
                    color={isParentActive ? activeColor : textColor}
                    fontWeight={isParentActive ? "bold" : "normal"}
                  >
                    {route.name}
                  </Text>
                  {/* Chevron indicator */}
                  <Icon
                    as={isOpen ? MdChevronLeft : MdChevronRight}
                    color={textColor}
                    w="18px"
                    h="18px"
                    me="8px"
                  />
                </Flex>
                <Box
                  h="36px"
                  w="4px"
                  bg={isParentActive ? brandColor : "transparent"}
                  borderRadius="5px"
                />
              </HStack>
            </Box>

            {/* Children */}
            <Collapse in={isOpen} animateOpacity>
              <Box ps="20px" mt="2px">
                {createLinks(route.items, depth + 1)}
              </Box>
            </Collapse>
          </Box>
        );
      }

      // Regular route (with or without icon)
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? (
              <Box>
                <HStack
                  spacing={activeRoute(route.path.toLowerCase()) ? "22px" : "26px"}
                  py="5px"
                  ps="10px"
                >
                  <Flex w="100%" alignItems="center" justifyContent="center">
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase()) ? activeIcon : textColor
                      }
                      me="18px"
                    >
                      {route.icon}
                    </Box>
                    <Text
                      me="auto"
                      color={
                        activeRoute(route.path.toLowerCase()) ? activeColor : textColor
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                      }
                    >
                      {route.name}
                    </Text>
                  </Flex>
                  <Box
                    h="36px"
                    w="4px"
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius="5px"
                  />
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={activeRoute(route.path.toLowerCase()) ? "22px" : "26px"}
                  py="5px"
                  ps="10px"
                >
                  <Text
                    me="auto"
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                    }
                  >
                    {route.name}
                  </Text>
                  <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
                </HStack>
              </Box>
            )}
          </NavLink>
        );
      }
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;