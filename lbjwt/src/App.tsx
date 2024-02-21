import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RestrictedPage from './RestrictedPage';
import HomePage from './HomePage';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={setToken} />} />
        <Route path="/restricted" element={token ? <RestrictedPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;