import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

function renderApp() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

test('renders the debug sandbox and allows adding a task', async () => {
  renderApp();

  expect(screen.getByText(/redux debug sandbox/i)).toBeInTheDocument();

  const input = screen.getByLabelText(/new task/i);
  await userEvent.type(input, 'Debug the reducer');
  await userEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(screen.getByText(/debug the reducer/i)).toBeInTheDocument();
  expect(screen.getByText(/task added successfully/i)).toBeInTheDocument();
});

test('shows an error message when the task input is empty', async () => {
  renderApp();

  await userEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(screen.getByText(/please enter a task before adding/i)).toBeInTheDocument();
});
