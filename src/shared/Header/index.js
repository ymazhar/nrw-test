import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import './index.scss';

export const Header = () => (
  <header id="app-header" className="app-header">
    <div className="container">
      <div className="app-header__row">
        <HeaderLogo />
      </div>
    </div>
  </header>
);
