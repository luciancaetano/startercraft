import AppProvider from './index';
import { render } from '@lib/tests';

describe('AppProvider Component', () => {
  it('should render', () => {
    const { container } = render(<AppProvider />);
    expect(container).toBeTruthy();
  });
});
