import { Route, Routes, BrowserRouter } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashRouter } from "./DashRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute>
            <DashRouter />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};
