import { Routes, Route, Navigate } from "react-router-dom";
import Student from "./pages/Bai4/Student";

export default function Bai4() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student" replace />} />
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}
