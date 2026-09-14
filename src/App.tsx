import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';
import { PageId } from './types';

// Page Shell Components
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import ForBusinessOwnersPage from './pages/ForBusinessOwnersPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const PAGE_PATH_MAP: Record<PageId, string> = {
  'home': '/',
  'how-it-works': '/how-it-works',
  'services': '/services',
  'for-business-owners': '/for-business-owners',
  'pricing': '/pricing',
  'about': '/about',
  'contact': '/contact',
};

const PATH_PAGE_MAP: Record<string, PageId> = {
  '/': 'home',
  '/how-it-works': 'how-it-works',
  '/services': 'services',
  '/customer-services': 'services',
  '/for-business-owners': 'for-business-owners',
  '/business-owners': 'for-business-owners',
  '/pricing': 'pricing',
  '/about': 'about',
  '/contact': 'contact',
};

function getPageFromUrl(): PageId {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (PATH_PAGE_MAP[path]) return PATH_PAGE_MAP[path];
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash && (hash as PageId) in PAGE_PATH_MAP) {
    return hash as PageId;
  }
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getPageFromUrl);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      setActivePage(getPageFromUrl());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleGetTellerBud = () => {
    setModalOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.history.pushState) {
      const targetPath = PAGE_PATH_MAP[page] || '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page }, '', targetPath);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FCFCFB] text-[#182026] flex flex-col font-sans selection:bg-[#E5F5F5] selection:text-[#008C95]">
      {/* 1. Shared Global Corporate Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onGetTellerBud={handleGetTellerBud}
      />

      {/* 2. Main Page Router / Shell Renderer */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'how-it-works' && (
          <HowItWorksPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'for-business-owners' && (
          <ForBusinessOwnersPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'pricing' && (
          <PricingPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onGetTellerBud={handleGetTellerBud}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Shared Corporate Full-Width Footer */}
      <Footer
        activePage={activePage}
        onNavigate={handleNavigate}
        onGetTellerBud={handleGetTellerBud}
      />

      {/* 4. Shared Primary CTA Dialog Modal */}
      <GetStartedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
