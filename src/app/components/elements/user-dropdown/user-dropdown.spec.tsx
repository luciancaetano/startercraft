import UserDropdown from './index';
import { render } from '@lib/tests';

describe('UserDropdown Component', () => {
  it('should render', () => {
    const { container } = render(<UserDropdown />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(
      <UserDropdown>
        <div>Test</div>
      </UserDropdown>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<UserDropdown className="test">Test</UserDropdown>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
