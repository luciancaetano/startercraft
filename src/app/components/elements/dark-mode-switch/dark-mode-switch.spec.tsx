import DarkModeSwitch from './index';
import { render } from '@lib/tests';

describe('DarkModeSwitch Component', () => {
  it('should render', () => {
    const { container } = render(<DarkModeSwitch />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(
      <DarkModeSwitch>
        <div>Test</div>
      </DarkModeSwitch>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<DarkModeSwitch className="test">Test</DarkModeSwitch>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
