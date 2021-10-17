import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/footer';
import Navbar from './components/navbar';
import routes from './routes';
import { trackingId } from './keys';
import FloatingActionButton from './components/shared/floating-action-button';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const App = () => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
  }, []);
  return (
    <>
      <CssBaseline />
      <div
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <Navbar />
        {routes}
        <FloatingActionButton
          color='default'
          onClick={scrollToTop}
          ariaLabel='scroll to top'
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
