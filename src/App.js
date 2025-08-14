
import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import OnlineTest from "./components/OnlineTest";
import LoginPage from "./components/LoginPage";
import ResultsHistoryPage from "./components/ResultsHistoryPage";
import AppHeader from "./components/AppHeader"; // We'll use this as a persistent header
import "./styles.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

function AppContent() {
  const { currentUser, loading } = useAuth();
  const [view, setView] = useState("test");

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  if (!currentUser) {
    return <LoginPage />;
  }

  // If logged in, show the main application
  return (
    <div className="online-test-container">
      <AppHeader onNavigate={setView} />
      {view === "test" && <OnlineTest />}
      {view === "history" && <ResultsHistoryPage />}
    </div>
  );
}

export default App;
