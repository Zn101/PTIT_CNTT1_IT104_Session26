import { Routes, Route, Navigate } from "react-router-dom";
import Teams from "./pages/Bai7/Teams";
import TeamsIndex from "./pages/Bai7/TeamsIndex";
import Team from "./pages/Bai7/Team";

export default function Bai7() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/teams" replace />} />
      <Route path="/teams" element={<Teams />}>
        <Route index element={<TeamsIndex />} />
        <Route path=":teamId" element={<Team />} />
      </Route>
    </Routes>
  );
}
