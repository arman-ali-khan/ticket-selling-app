import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyTicketsPage from './pages/buy-tickets';
import BuyTicketsPreviewPage from './pages/buy-tickets/preview';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
        <Route path="/buy-tickets/preview" element={<BuyTicketsPreviewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;