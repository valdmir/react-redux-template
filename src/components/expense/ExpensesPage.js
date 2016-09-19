import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as expenseAction from '../../actions/expenseActions';
import ExpenseList from './ExpenseList';
import {browserHistory} from 'react-router';
class ExpensesPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddExpensePage= this.redirectToAddExpensePage.bind(this);

  }

  expenseRow(expense,index){
    return <div key={index}> {expense.description}</div>;
  }
  redirectToAddExpensePage(){
    browserHistory.push('/expense');
  }
  render(){
    const {expenses}= this.props;
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <h1>Expenses</h1>
          <input type="button"
            value="Add Expense"
            className="btn btn-primary"
            onClick={this.redirectToAddExpensePage}/>
          <ExpenseList expenses={expenses}/>
        </div>
      </div>
    );
  }
}
ExpensesPage.propTypes = {
  expenses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state,ownProps){
  return {
    expenses: state.expenses
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(expenseAction, dispatch)
    // createCourse: bindActionCreators(courseActions.createCourse(), dispatch)

    // createCourse: course =>dispatch(courseActions.createCourse(course))
  };
}
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connect(mapStateToProps,mapDispatchToProps)(ExpensesPage);
// export default connectedStateAndProps(CoursesPage);
// export default connect(mapStateToProps)(CoursesPage);
