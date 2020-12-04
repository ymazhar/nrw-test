import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/tvm-header-logo.png';
import './index.scss';

export const HeaderLogo = memo(() => (
  <div className="header-logo">
    <Link to="/shows/6771" data-testid="linkTo">
      <img src={logo} className="header-logo__img" alt="tvm" width="180px" />
    </Link>
  </div>
));
