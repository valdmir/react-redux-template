import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function expenseReducer(state = initialState.expenses, action){
  switch (action.type) {
    case types.LOAD_EXPENSES_SUCCESS:
      return action.expenses;
    case types.CREATE_EXPENSES_SUCCESS:
      return [
        ...state,
        Object.assign({},action.expense)
      ];
    case types.UPDATE_EXPENSES_SUCCESS:
      return [
        ...state.filter(expense=> expense.id !== action.expense.id),
        Object.assign({},action.expense)
      ];
    default:
      return state;
  }
}
