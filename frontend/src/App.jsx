import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Projects from './pages/Projects/Projects';
import Payments from './pages/Payments/Payments';
import Settings from './pages/Settings';
import Disputes from './pages/Disputes';
import CreateProject from './pages/CreateProject';
import Workspace from './pages/Workspace';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/workspace/:id" element={<Workspace />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/disputes" element={<Disputes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
