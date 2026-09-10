import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Make sure only admin can enter dashboard
      if (data.user.role !== "admin") {
        throw new Error("You do not have admin permission.");
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      // Save user information
      localStorage.setItem("adminUser", JSON.stringify(data.user));

      navigate("/admin/dashboard");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-900 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">

        <div className="mb-6 text-center">
          <img
            src="/logo.jpg"
            alt="MR Constructions"
            className="mx-auto mb-4 h-20 w-auto"
          />

          <h1 className="text-2xl font-bold text-gray-900">
            MR Constructions
          </h1>

          <p className="mt-1 text-gray-600">
            Admin Dashboard Login
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="mb-1 block font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded border p-3"
              required
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded border p-3"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-yellow-600 px-4 py-3 font-bold text-white hover:bg-yellow-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}