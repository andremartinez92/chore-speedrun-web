import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GoogleSignInButton from '.';

const mocks = vi.hoisted(() => {
  return {
    signInWithGoogle: vi.fn(),
  };
});

vi.mock('@/lib/auth/sign-in-with-google', () => {
  return { signInWithGoogle: mocks.signInWithGoogle };
});

describe('<GoogleSignInButton/>', () => {
  it('works as expected', async () => {
    const user = userEvent.setup();
    render(<GoogleSignInButton>Click to sign in</GoogleSignInButton>);

    const signInButton = screen.getByRole('button', {
      name: /click to sign in/i,
    });

    expect(signInButton).toBeInTheDocument();

    await user.click(signInButton);

    expect(mocks.signInWithGoogle).toHaveBeenCalledOnce();
  });

  test('default children', () => {
    render(<GoogleSignInButton />);

    const signInButton = screen.getByRole('button', {
      name: /sign in with google/i,
    });

    expect(signInButton).toBeInTheDocument();
  });
});
