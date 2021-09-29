import { Router } from '@reach/router';

import About from './components/about';
import Error from './components/error';
import Help from './components/help';
import Home from './components/home';

export default (
  <Router>
    <Home path='/' />
    <About path='/about' />
    <Help path='/help' />
    <Error path='*' />
  </Router>
);
