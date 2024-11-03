/*
Nama : Shinta Eldo Marpaung
NIM : 41424026
Prodi : D-IV TRPL
*/

import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Login');
  };

  if (!user) {
    return <div>Please log in to view this page.</div>
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;