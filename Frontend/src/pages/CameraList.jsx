import React from "react";
import Dashboard from "../components/Dashboard/Dashboards";
import TabNavigator from "../components/Dashboard/TabNavigator";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import CameraList from "../components/CameraList/CameraList";
import AddCamera from "../components/CameraList/AddCamera";
import RemoveCamera from "../components/CameraList/RemoveCamera";

const CameraPage = () => {
  const routes = ["/CameraList", "/AddCamera", "/RemoveCamera"];

  const location = useLocation();

  return (
    <Dashboard>
      <TabNavigator
        title="Camera Details"
        routes={routes}
        currentRoute={location.pathname}
      />
      <Routes>
        <Route path="/Camera" element={<Navigate to="/CameraList" replace />} />
        <Route path="/CameraList" element={<CameraList />} />
        <Route path="/AddCamera" element={<AddCamera />} />
        <Route path="/RemoveCamera" element={<RemoveCamera />} />
      </Routes>
    </Dashboard>
  );
};

export default CameraPage;
