import BlinkButton from './blink-button';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

describe('BlinkButton', () => {
  it('renders the button with children', () => {
    render(<BlinkButton>Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('applies the correct classes for animation and colors', () => {
    render(<BlinkButton>Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('animate-pulse');
    expect(button).toHaveClass('bg-gradient-to-r');
    expect(button).toHaveClass('from-red-500');
    expect(button).toHaveClass('via-yellow-500');
    expect(button).toHaveClass('to-green-500');
  });

  it('triggers the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<BlinkButton onClick={handleClick}>Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('accepts additional className and applies it', () => {
    render(<BlinkButton className="extra-class">Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('extra-class');
  });

  it('passes additional props to the button element', () => {
    render(<BlinkButton data-testid="blink-button">Click Me</BlinkButton>);
    const button = screen.getByTestId('blink-button');
    expect(button).toBeInTheDocument();
  });
});
