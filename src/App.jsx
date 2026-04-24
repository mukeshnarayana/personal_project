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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Isolated route for the multi-step onboarding */}
        <Route path="/join" element={<JoinFlow />} />
        <Route path="/signin" element={<SignIn />} />

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
