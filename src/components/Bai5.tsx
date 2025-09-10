import { Routes, Route } from "react-router-dom";
import Login from "./pages/Bai5/Login";
import Account from "./pages/Bai5/Account";
import PrivateRouter from "./pages/Bai5/PrivateRouter";

export default function Bai5() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
