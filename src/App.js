import Footer from './components/footer';
import Navbar from './components/navbar';
import routes from './routes';

const App = () => (
  <>
    <Navbar />
    {routes}
    <Footer />
  </>
);

export default App;
