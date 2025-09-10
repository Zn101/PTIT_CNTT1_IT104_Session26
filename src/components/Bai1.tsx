import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./pages/Bai1/ProductDetail";

export default function Bai1() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product/12" replace />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}
