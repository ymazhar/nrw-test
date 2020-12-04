import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './index';

describe('header', () => {
  it('should render copyright text', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Copyright 2020')).toBeInTheDocument();
  });
});
