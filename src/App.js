import DevGrid from './components/dev-grid/dev-grid';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <DevGrid />
      <Footer />
    </div>
  );
};

export default App;
