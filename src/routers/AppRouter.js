import { Route, Routes, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashRouter } from "./DashRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="/*" element={<DashRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
