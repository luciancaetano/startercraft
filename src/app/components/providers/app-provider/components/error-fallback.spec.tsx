import ErrorFallback from './error-fallback';
import { render } from '@testing-library/react';

describe('ErrorFallback', () => {
  const defaultProps = {
    error: new Error('Test error message'),
    resetErrorBoundary: vi.fn(),
  };

  it('renders the error heading', () => {
    const { getByText } = render(<ErrorFallback {...defaultProps} />);
    expect(getByText('Oops!')).toBeInTheDocument();
  });

  it('displays the error message', () => {
    const { getByText } = render(<ErrorFallback {...defaultProps} />);
    expect(getByText('Test error message')).toBeInTheDocument();
  });

  it('renders try again button', () => {
    const { getByText } = render(<ErrorFallback {...defaultProps} />);
    expect(getByText('Try again')).toBeInTheDocument();
  });

  it('calls resetErrorBoundary when try again is clicked', () => {
    const resetFn = vi.fn();
    const { getByText } = render(
      <ErrorFallback error={new Error('fail')} resetErrorBoundary={resetFn} />,
    );

    getByText('Try again').click();

    expect(resetFn).toHaveBeenCalled();
  });
});
