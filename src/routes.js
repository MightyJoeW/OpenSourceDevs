import { Router } from '@reach/router';

import Home from './components/home';
import About from './components/about';
import User from './components/user';
import Error from './components/error';

export default (
  <Router>
    <Home path='/' />
    <About path='/about' />
    <User path='/users/:username' />
    <Error path='*' />
  </Router>
);
