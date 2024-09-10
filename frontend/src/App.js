import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Main from './pages/Main';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Reports from './pages/Reports';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Unprotected Routes */}
          <Route path="/" element={<Main />} />
          <Route path='/login' element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            {/* All routes inside this block are protected */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>

          {/* Fallback Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
