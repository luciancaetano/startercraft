import HomePage from './home-page';
import { render } from '@testing-library/react';

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
