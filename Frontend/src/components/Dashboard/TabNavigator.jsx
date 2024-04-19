import {
  AppBar,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Link, useRoutes } from "react-router-dom";

const TabNavigator = ({title,routes,currentRoute}) => {
 
  return (
    <div>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs textColor="inherit" value={currentRoute}>
          <Tab
            label="View Camera Devices"
            value={routes[0]}
            component={Link}
            to={routes[0]}
          />
          <Tab
            label="Add Camera"
            value={routes[1]}
            component={Link}
            to={routes[1]}
          />
          <Tab
            label="Remove Camera"
            value={routes[2]}
            component={Link}
            to={routes[2]}
          />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default TabNavigator;
