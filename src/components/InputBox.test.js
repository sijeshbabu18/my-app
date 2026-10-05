import { fireEvent, render, screen } from '@testing-library/react';
import InputBox from './InputBox';

test('formats Aadhaar values and sends the unformatted value to onChange', () => {
  const onChange = jest.fn();
  const { rerender } = render(
    <InputBox
      name="aadhaar"
      value="123456789012"
      maxLength={12}
      isAadhaarType
      onChange={onChange}
    />,
  );

  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('1234 5678 9012');
  expect(input).toHaveAttribute('maxLength', '14');

  fireEvent.change(input, { target: { value: '1234 5678 9013' } });
  expect(onChange.mock.calls[0][0].target.value).toBe('123456789013');

  rerender(
    <InputBox
      name="aadhaar"
      value="123456789013"
      maxLength={12}
      isAadhaarType
      onChange={onChange}
    />,
  );
  expect(input).toHaveValue('1234 5678 9013');
});

test('reports email validity through the change event', () => {
  const onChange = jest.fn();
  render(
    <InputBox
      name="email"
      value=""
      isEmailType
      onChange={onChange}
    />,
  );

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'person@example.com' },
  });

  expect(onChange.mock.calls[0][0].target.isValid).toBe(true);
  expect(onChange.mock.calls[0][0].target.errorMessage).toBe('');
});
