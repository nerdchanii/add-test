import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should have primary variant by default', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test').parentElement).toHaveClass('primary');
  });

  it('should have secondary variant when passed', () => {
    const { getByText } = render(<Button variant="secondary">Test</Button>);
    expect(getByText('Test').parentElement).toHaveClass('secondary');
  });

  it('should call onClick handler', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(getByText('Test'));
    expect(onClick).toHaveBeenCalled();
  });
});

