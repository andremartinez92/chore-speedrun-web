import { AUTH_SIGN_IN_ROUTE, HOME_ROUTE } from '@/routes';
import { render, screen } from '@testing-library/react';
import AuthActionButton from '.';

const mocks = vi.hoisted(() => {
  return { usePathnameMock: vi.fn() };
});

vi.mock('next/navigation', async () => {
  return {
    usePathname: mocks.usePathnameMock,
    useRouter: vi.fn(),
  };
});

describe('<AuthActionButton/>', () => {
  it('does not render if user not logged in and in the auth page', async () => {
    mocks.usePathnameMock.mockReturnValueOnce(AUTH_SIGN_IN_ROUTE);
    render(<AuthActionButton isLoggedIn={false} />);

    expect(
      screen.queryByRole('link', { name: /sign/i })
    ).not.toBeInTheDocument();
  });

  it('renders a sign in button if user is not logged in', () => {
    mocks.usePathnameMock.mockReturnValueOnce(HOME_ROUTE);
    render(<AuthActionButton isLoggedIn={false} />);

    expect(
      screen.queryByRole('link', { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it('renders a sign out button if user is logged in', () => {
    mocks.usePathnameMock.mockReturnValueOnce(HOME_ROUTE);
    render(<AuthActionButton isLoggedIn={true} />);

    expect(
      screen.queryByRole('button', { name: /sign out/i })
    ).toBeInTheDocument();
  });
});
