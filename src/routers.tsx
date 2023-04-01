import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import App from './App';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
