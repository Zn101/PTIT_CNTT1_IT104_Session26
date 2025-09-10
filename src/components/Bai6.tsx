import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Bai6/Login";
import Account from "./pages/Bai6/Account";
import PrivateRouter from "./pages/Bai6/PrivateRouter";

export default function Bai6() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
