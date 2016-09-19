import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import expenses from './expenseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
    courses: courses,
    authors: authors,
    expenses:expenses,
    ajaxCallsInProgress
});

export default rootReducer;
