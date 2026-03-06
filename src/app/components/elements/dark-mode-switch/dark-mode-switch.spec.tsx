import DarkModeSwitch from './dark-mode-switch';
import { render } from '@testing-library/react';

vi.mock('./dark-mode-switch.view-model', () => ({
  default: vi.fn(() => ({ colorMode: 'light', switchColorMode: vi.fn() })),
}));

vi.mock('./dark-mode-switch.module.scss', () => ({
  default: { darkModeSwitch: 'darkModeSwitch' },
}));

describe('DarkModeSwitch', () => {
  it('renders without crashing', () => {
    const { container } = render(<DarkModeSwitch />);
    expect(container).toBeTruthy();
  });

  it('applies testingID as data-testid', () => {
    const { getByTestId } = render(<DarkModeSwitch testingID="dark-switch" />);
    expect(getByTestId('dark-switch')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<DarkModeSwitch className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('renders the light switch checkbox', () => {
    const { container } = render(<DarkModeSwitch />);
    const checkbox = container.querySelector('input[name="light-switch"]');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders accessibility label', () => {
    const { getByText } = render(<DarkModeSwitch />);
    expect(getByText('Switch to light / dark version')).toBeInTheDocument();
  });
});
