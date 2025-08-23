import BlinkButton from './index';
import { render } from '@lib/tests';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

describe('BlinkButton', () => {
  it('renders the button with children', () => {
    render(<BlinkButton>Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('applies the correct classes for animation and colors', () => {
    render(<BlinkButton className="animate-pulse">Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('animate-pulse');
    expect(button).toHaveClass('bg-gradient-to-r');
  });

  it('triggers the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<BlinkButton onClick={handleClick}>Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    button.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('accepts additional className and applies it', () => {
    render(<BlinkButton className="test">Click Me</BlinkButton>);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('test');
  });

  it('passes additional props to the button element', () => {
    render(<BlinkButton testingID="blink-button">Click Me</BlinkButton>);
    const button = screen.getByTestId('blink-button');
    expect(button).toBeInTheDocument();
  });
});
