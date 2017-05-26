import { Router, hashHistory, Route } from "react-router";
import React from 'react';

import Home from './Home';
import LazyLoadPage from './pages/Lazyload';
import BlurImagePage from './pages/BlurImage';
import BackToTopPage from './pages/BackToTop';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/blurimage" component={BlurImagePage}></Route>
    <Route path="/lazyload" component={LazyLoadPage}></Route>
    <Route path="/backtotop" component={BackToTopPage}></Route>
  </Router>
)


export default router;
