import React, { memo } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../../assets/images/tvm-header-logo.png';
import './index.scss';

export const HeaderLogo = memo(() => (
  <Router>
    <div className="header-logo">
      <Link to="/shows/6771">
        <img src={logo} className="header-logo__img" alt="tvm" width="180px" />
      </Link>
    </div>
  </Router>
));
