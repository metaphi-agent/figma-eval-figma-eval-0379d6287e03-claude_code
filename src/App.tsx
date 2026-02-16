import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/category" element={<Layout><Category /></Layout>} />
        <Route path="/detail/:id" element={<Layout><Detail /></Layout>} />
        <Route path="/payment" element={<Layout><Payment /></Layout>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
