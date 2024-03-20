import { Toaster } from '@/components/toast/toaster';
import { CompleteChoreDocument } from '@/graphql/generated';
import { convertToGqlDate } from '@/lib/utils/convert-to-gql-date';
import { MOCK_DATE } from '@/tests/mocks/date';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GraphQLError } from 'graphql';
import CompleteChoreButton from '.';
import { completedChoreResponse } from '../__mocks__/complete-chore';

const CHORE_ID = completedChoreResponse.updateChoreCollection.records[0].id;

describe('<CompleteChoreButton/>', () => {
  beforeAll(() => {
    vi.setSystemTime(MOCK_DATE);
  });

  it('shows toast on success', async () => {
    const user = userEvent.setup();
    const completeChoreMock = {
      request: {
        query: CompleteChoreDocument,
        variables: {
          choreId: CHORE_ID,
          lastCompletedAt: convertToGqlDate(MOCK_DATE),
          isCompleted: true,
        },
      },
      result: { data: completedChoreResponse },
    };

    render(
      <>
        <MockedProvider mocks={[completeChoreMock]} addTypename={false}>
          <CompleteChoreButton choreId={CHORE_ID} isCompleted={false}>
            Complete chore
          </CompleteChoreButton>
        </MockedProvider>
        <Toaster />
      </>
    );

    const completeButton = screen.getByRole('button', {
      name: /complete chore/i,
    });

    expect(completeButton).not.toBeDisabled();
    await user.click(completeButton);

    expect(screen.getByText(/completed!/i)).toBeInTheDocument();
  });

  it('shows error toast on error', async () => {
    const user = userEvent.setup();
    const completeChoreMock = {
      request: {
        query: CompleteChoreDocument,
        variables: {
          choreId: CHORE_ID,
          lastCompletedAt: convertToGqlDate(MOCK_DATE),
          isCompleted: true,
        },
      },
      result: { errors: [new GraphQLError('Some error')] },
    };

    render(
      <>
        <MockedProvider mocks={[completeChoreMock]} addTypename={false}>
          <CompleteChoreButton choreId={CHORE_ID} isCompleted={false}>
            Complete Chore
          </CompleteChoreButton>
        </MockedProvider>
        <Toaster />
      </>
    );

    const completeButton = screen.getByRole('button', {
      name: /complete chore/i,
    });

    expect(completeButton).not.toBeDisabled();
    await user.click(completeButton);

    expect(screen.getByText(/some error/i)).toBeInTheDocument();
  });
});
