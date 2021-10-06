import { Router } from '@reach/router';

import About from './components/about';
import Error from './components/error';
import Home from './components/home';
import User from './components/user';

export default (
  <Router>
    <Home path='/' />
    <About path='/about' />
    <Error path='*' />
    <User path='/users' />
  </Router>
);
