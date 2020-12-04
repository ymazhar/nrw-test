import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';

describe('header', () => {
  it('should render header logo', () => {
    const { getByAltText } = render(
      <Router>
        <HeaderLogo />
      </Router>
    );

    expect(getByAltText(/tvm/i)).toBeInTheDocument();
  });
});
