"use client";

import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const MINI_DRAWER_WIDTH = 58;

interface StyledDrawerProps {
  open: boolean;
  drawerWidth: number;
}

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<StyledDrawerProps>(({ theme, open, drawerWidth }) => ({
  width: open ? drawerWidth : MINI_DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),

  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : MINI_DRAWER_WIDTH,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
  },
}));

interface HorizontalDashboardProps {
  drawer: ReactNode;
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default function HorizontalDashboard({
  drawer,
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: HorizontalDashboardProps) {
  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        disableScrollLock
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer */}
      <StyledDrawer
        variant="permanent"
        open={mobileOpen}
        drawerWidth={drawerWidth}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
}
