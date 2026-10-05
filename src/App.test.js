import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('loads the input component test screen', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Learning Page' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'InputBox component test' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Text input' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Aadhaar input' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Aadhaar input' })).toHaveAttribute(
    'placeholder',
    'xxx xxxx xxx xxx',
  );
  expect(screen.getByRole('textbox', { name: 'Email input' })).toBeInTheDocument();
});

test('switches the Learning Page to Urdu right-to-left layout', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: 'اردو' }));

  const learningPage = screen.getByRole('region', { name: 'سیکھنے کا صفحہ' });
  expect(learningPage).toHaveAttribute('dir', 'rtl');
  expect(learningPage).toHaveAttribute('lang', 'ur');
  expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();
});

test.each([
  ['hi', 'इनपुट बॉक्स कंपोनेंट परीक्षण', 'टेक्स्ट इनपुट'],
  ['ur', 'ان پٹ باکس کمپوننٹ کا ٹیسٹ', 'متن کا ان پٹ'],
  ['ml', 'ഇൻപുട്ട് ബോക്സ് ഘടക പരിശോധന', 'ടെക്സ്റ്റ് ഇൻപുട്ട്'],
])('translates the screen to %s when selected', async (language, heading, label) => {
  render(<App />);

  await userEvent.selectOptions(
    screen.getByRole('combobox', { name: 'Language' }),
    language,
  );

  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: label })).toBeInTheDocument();
});

test('right-aligns the Urdu placeholder while keeping the input left-to-right', async () => {
  render(<App />);

  await userEvent.selectOptions(
    screen.getByRole('combobox', { name: 'Language' }),
    'ur',
  );

  const textInput = screen.getByRole('textbox', { name: 'متن کا ان پٹ' });
  expect(textInput).toHaveAttribute('dir', 'ltr');
  expect(textInput.closest('.inputbox-wrapper')).toHaveAttribute('dir', 'rtl');
});
