import reducer, {
  addTodo,
  clearCompleted,
  toggleTodo,
} from './todoSlice';

const initialState = {
  items: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Write tests', completed: true },
  ],
};

test('adds a trimmed todo item', () => {
  const state = reducer(initialState, addTodo('  Learn Jest  '));

  expect(state.items).toHaveLength(3);
  expect(state.items[2]).toEqual({
    id: expect.any(Number),
    text: 'Learn Jest',
    completed: false,
  });
});

test('does not add an empty todo', () => {
  const state = reducer(initialState, addTodo('   '));

  expect(state.items).toEqual(initialState.items);
});

test('toggles a todo completion state', () => {
  const state = reducer(initialState, toggleTodo(1));

  expect(state.items[0].completed).toBe(true);
});

test('clears completed todos', () => {
  const state = reducer(initialState, clearCompleted());

  expect(state.items).toEqual([
    { id: 1, text: 'Learn Redux', completed: false },
  ]);
});
