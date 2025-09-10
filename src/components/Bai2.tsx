import { Routes, Route, Navigate } from "react-router-dom";
import Student from "./pages/Bai2/Student";

export default function Bai2() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student/nam" replace />} />
      <Route path="/student/:name" element={<Student />} />
    </Routes>
  );
}
