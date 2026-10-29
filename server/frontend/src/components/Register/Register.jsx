
import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Registration form submitted!");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input id="username" name="username" className="form-control"
            value={form.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input id="first_name" name="first_name" className="form-control"
            value={form.first_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input id="last_name" name="last_name" className="form-control"
            value={form.last_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" className="form-control"
            value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" name="password" type="password" className="form-control"
            value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}
