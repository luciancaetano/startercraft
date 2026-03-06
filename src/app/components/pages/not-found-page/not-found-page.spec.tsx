import NotFoundPage from './not-found-page';
import { render } from '@testing-library/react';

vi.mock('./not-found-page.view-model', () => ({
  default: vi.fn(() => ({})),
}));

vi.mock('./not-found-page.module.scss', () => ({
  default: { notFoundPage: 'notFoundPage' },
}));

vi.mock('@components/elements/page', () => ({
  default: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
    <div data-testid={props.testingID as string} className={props.className as string}>{children}</div>
  ),
}));

describe('NotFoundPage', () => {
  it('renders 404 heading', () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText('404')).toBeInTheDocument();
  });

  it('renders page not found message', () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText('Page Not Found')).toBeInTheDocument();
  });

  it('applies testingID as data-testid', () => {
    const { getByTestId } = render(<NotFoundPage testingID="not-found" />);
    expect(getByTestId('not-found')).toBeInTheDocument();
  });
});
