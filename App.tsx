
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import SuccessPage from './pages/SuccessPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
