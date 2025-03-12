import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import EventSelectionPage from "./pages/event-selection";
import BuyTicketsPage from './pages/buy-tickets';
import BuyTicketsPreviewPage from './pages/buy-tickets/preview';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import ResultsPage from './pages/results';
import AddFundsPage from './pages/add-funds';
import BuyTicketsUserPage from './pages/buy-tickets/customer';
import WinnersPage from "./pages/winners";
// admin
import UsersPage from './pages/UsersPage';
import TicketsPage from './pages/TicketsPage';
import AdminResultsPage from './pages/ResultsPage';
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import AffiliatesPage from './pages/AffiliatesPage';
import FundsPage from './pages/FundsPage';
import PrizesPage from './pages/PrizesPage';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event-selection" element={<EventSelectionPage />} />
        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
        <Route path="/buy-tickets/customer" element={<BuyTicketsUserPage />} />
        <Route path="/buy-tickets/preview" element={<BuyTicketsPreviewPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-funds" element={<AddFundsPage />} />
        
        {/* admin - using proper nested routes */}
        <Route path="/admin" element={<DashboardLayout><Outlet /></DashboardLayout>}>
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="results" element={<AdminResultsPage />} />
          <Route path="prizes" element={<PrizesPage />} />
          <Route path="funds" element={<FundsPage />} />
          <Route path="payment-methods" element={<PaymentMethodsPage />} />
          <Route path="affiliates" element={<AffiliatesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </>
  );
}

export default App;