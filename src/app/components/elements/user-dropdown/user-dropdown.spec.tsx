import UserDropdown from './index';
import { render } from '@lib/tests';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('UserDropdown Component', () => {
  it('should render', () => {
    const { container } = render(<UserDropdown />);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<UserDropdown className="test">Test</UserDropdown>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
