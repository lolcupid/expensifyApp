import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description, amount, note='', createdBy=0 } = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      amount,
      note,
      createdBy
    }
  }
}

const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    expense: { 
      id: id
    }
  }
}

const expenseReducerDefault = [];
const expenseReducer = ( state = expenseReducerDefault, action ) => {
  switch(action.type) {
    case 'ADD_EXPENSE' :
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE' :
      return state.filter((stateOne) => stateOne.id !== action.expense.id )
    default :
      return state;
  }
}

const filterReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefault, action) => {
  switch(action.type) {
    default :
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses : expenseReducer,
    filter : filterReducer
  })
)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 30}));
const expenseThree = store.dispatch(addExpense({description: 'Travel', amount: 3000}));
const expenseFour = store.dispatch(addExpense({description: 'Bicycle', amount: 300}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(removeExpense({id: expenseFour.expense.id}));

const demo = {
  expenses: [{
    id: 'sdf1313343',
    description: 'hello world',
    amount: 11000,
  }],
  filter: {
    sortBy: 'amount',
    createdBy: undefined,
    startBy: undefined
  }
}

unsubscribe();