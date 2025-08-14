import React from "react";
//import Timer from './Timer';
import { useAuth } from "../context/AuthContext";

function AppHeader({ onNavigate }) {
  const { currentUser, logout } = useAuth(); // Get user and logout function

  return (
    <header className="app-header">
      <div className="logo-container">
        <div className="logo-icon">A</div>
        <span>EL-Usman Software Solutions - 08128368888</span>
      </div>

      <nav className="main-nav">
        <button onClick={() => onNavigate("test")}>Take Test</button>
        <button onClick={() => onNavigate("history")}>My Results</button>
      </nav>

      <div className="user-profile">
        {currentUser && (
          <>
            <img src="/usa.jpg" alt="User Avatar" />
            <span>{currentUser.name}</span>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default AppHeader;
