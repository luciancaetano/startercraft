import HomePage from './home-page';
import { render } from '@lib/tests';

describe('HomePage Component', () => {
  it('should render', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<HomePage className="test"></HomePage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
