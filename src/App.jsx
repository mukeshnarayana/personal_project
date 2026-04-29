import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Home from './pages/Home';
import CharityDirectory from './pages/CharityDirectory';
import PrizeDraws from './pages/PrizeDraws';
import JoinFlow from './pages/JoinFlow';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import ScoreEntry from './pages/ScoreEntry';
import MyWinnings from './pages/MyWinnings';
import AccountSettings from './pages/AccountSettings';
import CharityHub from './pages/CharityHub';

// Admin imports
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminNewUser from './pages/admin/AdminNewUser';
import AdminDraws from './pages/admin/AdminDraws';
import AdminNewDraw from './pages/admin/AdminNewDraw';
import AdminCharities from './pages/admin/AdminCharities';
import AdminNewCharity from './pages/admin/AdminNewCharity';
import AdminWinners from './pages/admin/AdminWinners';
import AdminAnalytics from './pages/admin/AdminAnalytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Isolated route for the multi-step onboarding */}
        <Route path="/join" element={<JoinFlow />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Admin Routes */}
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/new" element={<AdminNewUser />} />
        <Route path="/admin/draws" element={<AdminDraws />} />
        <Route path="/admin/draws/new" element={<AdminNewDraw />} />
        <Route path="/admin/charities" element={<AdminCharities />} />
        <Route path="/admin/charities/new" element={<AdminNewCharity />} />
        <Route path="/admin/winners" element={<AdminWinners />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />

        {/* Main application layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="charities" element={<CharityDirectory />} />
          <Route path="draws" element={<PrizeDraws />} />
        </Route>

        {/* Authenticated Application Layout */}
        <Route element={<AuthenticatedLayout />}>
          {/* Post-signin default to dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/score-entry" element={<ScoreEntry />} />
          <Route path="/charity-hub" element={<CharityHub />} />
          <Route path="/winnings" element={<MyWinnings />} />
          <Route path="/settings" element={<AccountSettings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
