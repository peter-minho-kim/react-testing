import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    expense: {
      id: '42',
      description: 'test desc',
      note: 'test note',
      amount: 3700,
      createdAt: 1000
    }
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const note = 'edited test note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].note).toEqual(note);
});

test('should not edit expense if expense not found', () => {
  const note = 'edited test note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '88',
    updates: {
      note
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
