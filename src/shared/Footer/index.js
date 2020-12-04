import React, { memo } from 'react';
import './index.scss';

export const Footer = memo(() => (
  <footer id="app-footer" className="app-footer">
    <div className="container">
      <div className="app-footer__row">
        <p>Copyright 2020</p>
      </div>
    </div>
  </footer>
));
