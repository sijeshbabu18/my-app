import { act, render, screen } from '@testing-library/react';
import StatusModal from './StatusModal';

afterEach(() => {
  jest.useRealTimers();
});

test('renders a success message', () => {
  render(
    <StatusModal
      type="success"
      message="Task added successfully."
      onClose={jest.fn()}
    />,
  );

  expect(screen.getByRole('alert')).toHaveClass('status-modal', 'success');
  expect(screen.getByText('Success')).toBeInTheDocument();
  expect(screen.getByText('Task added successfully.')).toBeInTheDocument();
});

test('renders an error message', () => {
  render(
    <StatusModal
      type="error"
      message="Please enter a task before adding."
      onClose={jest.fn()}
    />,
  );

  expect(screen.getByRole('alert')).toHaveClass('status-modal', 'error');
  expect(screen.getByText('Error')).toBeInTheDocument();
  expect(screen.getByText('Please enter a task before adding.')).toBeInTheDocument();
});

test('calls onClose after 2.5 seconds', () => {
  jest.useFakeTimers();
  const onClose = jest.fn();

  render(
    <StatusModal
      type="success"
      message="Saved."
      onClose={onClose}
    />,
  );

  expect(onClose).not.toHaveBeenCalled();

  act(() => {
    jest.advanceTimersByTime(2500);
  });

  expect(onClose).toHaveBeenCalledTimes(1);
});

test('renders nothing when there is no message', () => {
  const { container } = render(
    <StatusModal type="success" message="" onClose={jest.fn()} />,
  );

  expect(container).toBeEmptyDOMElement();
});
