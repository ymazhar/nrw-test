import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { HeaderLogo } from './index';

describe('header-logo', () => {
  it('should redirect to the root', () => {
    const history = createMemoryHistory();
    const route = '/shows/6771';
    const { getByTestId } = render(
      <Router history={history}>
        <HeaderLogo />
      </Router>
    );

    const linkTo = getByTestId('linkTo');

    fireEvent.click(linkTo);
    expect(history.location.pathname).toBe(route);
  });
});
