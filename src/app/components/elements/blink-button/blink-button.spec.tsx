import BlinkButton from './index';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

describe('BlinkButton', () => {
  it('renders the button with children', () => {
    const { getByText } = render(<BlinkButton>Click Me</BlinkButton>);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('applies the correct classes for animation and colors', () => {
    const { getByText } = render(<BlinkButton className="animate-pulse">Click Me</BlinkButton>);
    const button = getByText('Click Me');
    expect(button).toHaveClass('animate-pulse');
    expect(button).toHaveClass('bg-gradient-to-r');
  });

  it('triggers the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<BlinkButton onClick={handleClick}>Click Me</BlinkButton>);
    const button = getByText('Click Me');
    button.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('accepts additional className and applies it', () => {
    const { getByText } = render(<BlinkButton className="test">Click Me</BlinkButton>);
    const button = getByText('Click Me');
    expect(button).toHaveClass('test');
  });

  it('passes additional props to the button element', () => {
    const { getByTestId } = render(<BlinkButton testingID="blink-button">Click Me</BlinkButton>);
    const button = getByTestId('blink-button');
    expect(button).toBeInTheDocument();
  });
});
