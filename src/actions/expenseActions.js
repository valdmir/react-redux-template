import * as types from './actionTypes';
import ExpenseApi from '../api/ExpenseApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
export function loadExpenseSuccess(expenses){
  return {type: types.LOAD_EXPENSES_SUCCESS, expenses};

}
export function createExpenseSuccess(expense){
  return {type:types.CREATE_EXPENSES_SUCCESS, expense};
}
export function updateExpenseSuccess(expense){
  return {type:types.UPDATE_EXPENSES_SUCCESS, expense};
}

export function loadExpenses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ExpenseApi.getAllExpenses().then(expenses => {
      dispatch(loadExpenseSuccess(expenses));
    }).catch(error => {
      throw(error);
    });
  };
}
export function saveExpense(expense){
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return ExpenseApi.saveExpense(expense).then(savedExpense => {
      expense.id ? dispatch(updateExpenseSuccess(savedExpense)) :
        dispatch(createExpenseSuccess(savedExpense));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
export function loadTypes() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ExpenseApi.getAllType().then(expenses => {
      dispatch(loadExpenseSuccess(expenses));
    }).catch(error => {
      throw(error);
    });
  };
}
