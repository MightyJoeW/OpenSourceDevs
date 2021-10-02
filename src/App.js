import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/footer';
import Navbar from './components/navbar';
import routes from './routes';

const App = () => (
  <>
    <CssBaseline />
    <div
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <Navbar />
      {routes}
      <Footer />
    </div>
  </>
);

export default App;
