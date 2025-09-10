import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [User] = useState({
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Admin",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.email === User.email &&
      formData.password === User.password &&
      formData.role === User.role
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/account");
    } else {
      alert("Thông tin đăng nhập không đúng!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Nhập email" value={formData.email} onChange={handleChange}/><br />
        <input type="password" name="password" placeholder="Nhập mật khẩu" value={formData.password} onChange={handleChange}/><br />
          <select name="role" value={formData.role} onChange={handleChange}><br />
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
