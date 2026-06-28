import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails/ProjectDetails'));

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        border: '3px solid #EAEAEA',
        borderTopColor: '#6200EE',
        borderRadius: '50%',
        animation: 'spin-slow 0.7s linear infinite',
      }} />
      <span style={{ fontSize: '14px', color: '#999', fontFamily: 'Inter, sans-serif' }}>
        Loading...
      </span>
    </div>
  );
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
              gap: '16px',
              fontFamily: 'Inter, sans-serif',
            }}>
              <h1 style={{ fontSize: '64px', fontWeight: 900, color: '#6200EE', margin: 0 }}>404</h1>
              <p style={{ color: '#666', margin: 0 }}>Page not found</p>
              <a href="/" style={{
                padding: '10px 24px',
                background: '#6200EE',
                color: 'white',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                Back to Portfolio
              </a>
            </div>
          } />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
