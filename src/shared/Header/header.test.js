import React from 'react';
import { render } from '@testing-library/react';
import { HeaderLogo } from './HeaderLogo';

describe('header', () => {
  it('should render header logo', () => {
    const { getByAltText } = render(<HeaderLogo />);

    expect(getByAltText('tvm')).toBeInTheDocument();
  });
});
