import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import App from './App';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './contexts/AuthContext';
import useAuth from './utils/hooks/useAuth';
import { useEffect } from 'react';

export default function AppRouter() {
  const { loading } = useAuth();
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes role={[1, 2]} />}>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
