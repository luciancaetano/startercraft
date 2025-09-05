import MainLayout from './index';
import { render } from '@testing-library/react';

describe('MainLayout Component', () => {
  it('should render', () => {
    const { container } = render(<MainLayout />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(
      <MainLayout>
        <div>Test</div>
      </MainLayout>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<MainLayout className="test">Test</MainLayout>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
