import './assets/css/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import { Homepage } from 'components/Homepage';

import Header from 'components/navigations/Header';
import Footer from 'components/navigations/Footer';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const location = useLocation();

  // 🔹 admin & auth check
  const isAdmin = location.pathname.startsWith('/admin');
  const isAuth = location.pathname.startsWith('/auth');

  const showHeaderFooter = !isAdmin && !isAuth;

  return (
    <ChakraProvider theme={currentTheme}>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            <AdminLayout
              theme={currentTheme}
              setTheme={setCurrentTheme}
            />
          }
        />
        <Route path="/" element={<Homepage />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </ChakraProvider>
  );
}
