import { useState, useEffect } from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { Layout } from './components/Layout';
import { DisclaimerSplash } from './components/DisclaimerSplash';
import { useDisclaimer } from './hooks/useDisclaimer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ReaderPage } from './pages/ReaderPage';

// Named component so React hooks rules are satisfied
function RootLayout() {
  const { isAcknowledged, acknowledge } = useDisclaimer();
  const [showDisclaimer, setShowDisclaimer] = useState(!isAcknowledged());

  useEffect(() => {
    if (!isAcknowledged()) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcknowledge = () => {
    acknowledge();
    setShowDisclaimer(false);
  };

  return (
    <>
      {showDisclaimer && <DisclaimerSplash onAcknowledge={handleAcknowledge} />}
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

// Root layout route
const rootRoute = createRootRoute({
  component: RootLayout,
});

// Page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const catalogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/catalog',
  component: CatalogPage,
});

const readerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reader/$slideId',
  component: ReaderPage,
});

// Router
const routeTree = rootRoute.addChildren([indexRoute, catalogRoute, readerRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
