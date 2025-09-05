import Page from './index';
import { render } from '@testing-library/react';

describe('Page Component', () => {
  it('should render', () => {
    const { container } = render(<Page />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(
      <Page>
        <div>Test</div>
      </Page>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<Page className="test">Test</Page>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
