import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import {
  AddAlert,
  CameraAlt,
  DvrOutlined,
  FindInPage,
  Logout,
  Map,
  Report,
  Settings,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  {
    id: "Options",
    children: [
      { id: 0, name: "Camera", icon: <CameraAlt />, active: false },
      { id: 1, name: "DVR", icon: <DvrOutlined />, active: false },
      { id: 2, name: "Map", icon: <Map />, active: false },
      { id: 3, name: "Detection", icon: <FindInPage />, active: false },
      { id: 4, name: "Reports", icon: <Report />, active: false },
      { id: 5, name: "Alerts", icon: <AddAlert />, active: false },
      { id: 6, name: "User", icon: <VerifiedUserOutlined />, active: false },
      { id: 7, name: "Settings", icon: <Settings />, active: false },
    ],
  },

  // {
  //   id: 'User',
  //   children: [
  //     { id: 'User Management', icon: <PeopleIcon /> },
  //     { id: 'Roles', icon: <RolesIcon /> },
  //     { id: 'Permissions', icon: <PermissionsIcon /> },
  //   ],
  // },
  // {
  //   id: 'Map',
  //   children: [
  //     { id: 'Map View', icon: <MapIcon /> },
  //     { id: 'Location Tracking', icon: <LocationIcon /> },
  //     { id: 'Route Planning', icon: <RouteIcon /> },
  //   ],
  // },
  // {
  //   id: 'Detection',
  //   children: [
  //     { id: 'Crime Detection', icon: <DetectIcon /> },
  //     { id: 'Anomaly Detection', icon: <AnomalyIcon /> },
  //     { id: 'Predictive Analysis', icon: <PredictIcon /> },
  //   ],
  // },
  // {
  //   id: 'Reports',
  //   children: [
  //     { id: 'Incident Reports', icon: <IncidentIcon /> },
  //     { id: 'Statistical Reports', icon: <StatsIcon /> },
  //     { id: 'Trend Analysis', icon: <TrendIcon /> },
  //   ],
  // },
  // {
  //   id: 'Alerts',
  //   children: [
  //     { id: 'Recent Alerts', icon: <RealTimeIcon /> },
  //     { id: 'Previous Alerts', icon: <HistoricalIcon /> },
  //   ],
  // },
  // {
  //   id: 'Settings',
  //   children: [
  //     { id: 'General Settings', icon: <GeneralIcon /> },
  //     { id: 'Notification Settings', icon: <NotificationIcon /> },
  //     { id: 'System Preferences', icon: <SystemIcon /> },
  //   ],
  // },
  // {
  //   id: 'Storage',
  //   children: [
  //     { id: 'Data Storage', icon: <StorageIcon /> },
  //     { id: 'Backup & Restore', icon: <BackupIcon /> },
  //     { id: 'Archive Management', icon: <ArchiveIcon /> },
  //   ],
  // },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Dashboard
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id, name, icon, active }) => (
              <ListItem
                disablePadding
                key={id}
                sx={{ py: 1, px: 3 }}
                onClick={() => {
                  navigate(`/${name}`);
                }}
              >
                <ListItemButton  sx={item} divider={true}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </ListItemButton>
                <Divider sx={{ mt: 2 }} />
              </ListItem>
            ))}
            <ListItemButton sx={{ py: 2, px: 3, color: "white" }}>
              <ListItemText>Log out</ListItemText>
              <ListItemIcon color="white">
                <Logout />
              </ListItemIcon>
            </ListItemButton>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
