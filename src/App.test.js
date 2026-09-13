import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from './App';

beforeEach(() => {
  window.dataLayer = [];
});

test('tracks button clicks in the GTM data layer', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: 'Button B' }));

  expect(window.dataLayer).toContainEqual({
    event: 'button_counter_clicked',
    event_name: 'button_counter_clicked',
    button_name: 'B',
  });
});
