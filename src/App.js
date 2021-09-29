import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/footer';
import Navbar from './components/navbar';
import routes from './routes';

const App = () => (
  <>
    <CssBaseline />
    <Navbar />
    {routes}
    <Footer />
  </>
);

export default App;
