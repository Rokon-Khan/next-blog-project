"use client";
import ProtectedRoute from "../hoc/protectedRoute";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user?.first_name || "User"}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default ProtectedRoute(Dashboard);
