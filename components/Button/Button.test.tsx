import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  it('should render a text button', () => {
    render(<Button type='button' />);

    const button = screen.getByRole('button');

    expect(button).toBeDefined();
  });
});
