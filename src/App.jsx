import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Toaster } from './components/ui/toaster';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy load all pages for better code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Locations = lazy(() => import('./pages/Locations'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const RequestAccountDeletion = lazy(() => import('./pages/RequestAccountDeletion'));
const Bandra = lazy(() => import('./pages/Bandra'));
const Jogeshwari = lazy(() => import('./pages/Jogeshwari'));
const Kandivali = lazy(() => import('./pages/Kandivali'));
const Mahim = lazy(() => import('./pages/Mahim'));
const BandraEast = lazy(() => import('./pages/BandraEast'));
const Dharavi = lazy(() => import('./pages/Dharavi'));
const Nalasopara = lazy(() => import('./pages/Nalasopara'));
const DharaviKoliwada = lazy(() => import('./pages/DharaviKoliwada'));
const Goregaon = lazy(() => import('./pages/Goregaon'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ScrapCollectionPage = lazy(() => import('./pages/ScrapCollectionPage'));
const DemolitionServicePage = lazy(() => import('./pages/DemolitionServicePage'));
const DismantlingPage = lazy(() => import('./pages/DismantlingPage'));
const PaperShreddingPage = lazy(() => import('./pages/PaperShreddingPage'));
const SocietyTieUpPage = lazy(() => import('./pages/SocietyTieUpPage'));
const JunkRemovalServicePage = lazy(() => import('./pages/JunkRemovalServicePage'));
const VehicleScrappingPage = lazy(() => import('./pages/VehicleScrappingPage'));
// Scrap Category Pages
const AluminiumScrapPage = lazy(() => import('./Scrap Category Pages/AluminiumScrapPage'));
const CopperScrapPage = lazy(() => import('./Scrap Category Pages/CopperScrapPage'));
const BrassScrapPage = lazy(() => import('./Scrap Category Pages/BrassScrapPage'));
const IronSteelScrapPage = lazy(() => import('./Scrap Category Pages/Iron&SteelScrapPage'));
const StainlessSteelScrapPage = lazy(() => import('./Scrap Category Pages/StainlessSteelScrappage'));
const EWastePage = lazy(() => import('./Scrap Category Pages/E-wasteScrapPage'));
const ACScrapPage = lazy(() => import('./Scrap Category Pages/ACScrapPage'));
const RefrigeratorScrapPage = lazy(() => import('./Scrap Category Pages/RefrigiratorScrapPage'));
const WashingMachineScrapPage = lazy(() => import('./Scrap Category Pages/WashingmachineScrapPage'));
const MicrowaveScrapPage = lazy(() => import('./Scrap Category Pages/MicrowaveScrapPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    // GA4 Page View Tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: pathname,
    });
    
  }, [pathname]);
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  const openModal = (service = '') => {
    setInitialService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInitialService('');
  };

  // Wrapper to pass props to route elements
  const renderWithProps = (element, props) => {
    return React.cloneElement(element, props);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header openModal={openModal} />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={renderWithProps(<Home />, { openModal })} />
              <Route path="/services" element={renderWithProps(<Services />, { openModal })} />
              <Route path="/about" element={renderWithProps(<About />, { openModal })} />
              <Route path="/contact" element={renderWithProps(<Contact />, { openModal })} />
              <Route path="/locations" element={renderWithProps(<Locations />, { openModal })} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/request-account-deletion" element={<RequestAccountDeletion />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/bandra" element={renderWithProps(<Bandra />, { openModal })} />
              <Route path="/jogeshwari" element={renderWithProps(<Jogeshwari />, { openModal })} />
              <Route path="/kandivali" element={renderWithProps(<Kandivali />, { openModal })} />
              <Route path="/mahim" element={renderWithProps(<Mahim />, { openModal })} />
              <Route path="/bandra-east" element={renderWithProps(<BandraEast />, { openModal })} />
              <Route path="/dharavi" element={renderWithProps(<Dharavi />, { openModal })} />
              <Route path="/nalasopara" element={renderWithProps(<Nalasopara />, { openModal })} />
              <Route path="/dharavi-koliwada" element={renderWithProps(<DharaviKoliwada />, { openModal })} />
              <Route path="/goregaon" element={renderWithProps(<Goregaon />, { openModal })} />
              <Route path="/blog" element={renderWithProps(<Blog />, { openModal })} />
              <Route path="/blog/:slug" element={renderWithProps(<BlogPost />, { openModal })} />
              <Route path="/services/scrap-collection" element={renderWithProps(<ScrapCollectionPage />, { openModal })} />
              <Route path="/services/demolition-service" element={renderWithProps(<DemolitionServicePage />, { openModal })} />
              <Route path="/services/dismantling" element={renderWithProps(<DismantlingPage />, { openModal })} />
              <Route path="/services/paper-shredding" element={renderWithProps(<PaperShreddingPage />, { openModal })} />
              <Route path="/services/society-tie-up" element={renderWithProps(<SocietyTieUpPage />, { openModal })} />
              <Route path="/services/junk-removal-service" element={renderWithProps(<JunkRemovalServicePage />, { openModal })} />
              <Route path="/services/vehicle-scrapping" element={renderWithProps(<VehicleScrappingPage />, { openModal })} />
              <Route path="/sell-aluminium-scrap-mumbai" element={renderWithProps(<AluminiumScrapPage />, { openModal })} />
              <Route path="/sell-copper-scrap-mumbai" element={renderWithProps(<CopperScrapPage />, { openModal })} />
              <Route path="/sell-brass-scrap-mumbai" element={renderWithProps(<BrassScrapPage />, { openModal })} />
              <Route path="/sell-iron-steel-scrap-mumbai" element={renderWithProps(<IronSteelScrapPage />, { openModal })} />
              <Route path="/sell-stainless-steel-scrap-mumbai" element={renderWithProps(<StainlessSteelScrapPage />, { openModal })} />
              <Route path="/sell-e-waste-mumbai" element={renderWithProps(<EWastePage />, { openModal })} />
              <Route path="/sell-ac-scrap-mumbai" element={renderWithProps(<ACScrapPage />, { openModal })} />
              <Route path="/sell-refrigerator-scrap-mumbai" element={renderWithProps(<RefrigeratorScrapPage />, { openModal })} />
              <Route path="/sell-washing-machine-scrap-mumbai" element={renderWithProps(<WashingMachineScrapPage />, { openModal })} />
              <Route path="/sell-microwave-scrap-mumbai" element={renderWithProps(<MicrowaveScrapPage />, { openModal })} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BookingModal isOpen={isModalOpen} onClose={closeModal} initialService={initialService} />
        <Toaster />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
