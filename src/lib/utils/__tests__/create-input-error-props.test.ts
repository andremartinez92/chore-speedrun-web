import { createInputErrorProps } from '../create-input-error-props';

const MESSAGE = 'This is the message';
describe('createInputErrorProps', () => {
  it('returns expected object when there is an error and message', () => {
    const error = { type: 'random', message: MESSAGE };

    expect(createInputErrorProps(error)).toEqual({
      isError: true,
      helperText: MESSAGE,
    });
  });

  it('returns expected object when there is no error', () => {
    expect(createInputErrorProps(undefined)).toEqual({
      isError: false,
      helperText: '',
    });
  });
});
