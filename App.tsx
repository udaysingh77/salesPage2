
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage.tsx';
import SuccessPage from './pages/SuccessPage.tsx';
import Layout from './components/Layout.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<SalesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
