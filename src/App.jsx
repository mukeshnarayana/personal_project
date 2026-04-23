import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CharityDirectory from './pages/CharityDirectory';
import PrizeDraws from './pages/PrizeDraws';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="charities" element={<CharityDirectory />} />
          <Route path="draws" element={<PrizeDraws />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
