import React,{PropTypes} from 'react';
import ExpenseListRow from './ExpenseListRow';

const ExpenseList =({expenses , deleteExpense})=> {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Expense Date</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense =>
          <ExpenseListRow key={expense._id} expense={expense} />
        )}
      </tbody>
    </table>

  );
};
ExpenseList.propTypes ={
  expenses: PropTypes.array.isRequired,
  deleteExpense:PropTypes.object
};

export default ExpenseList;
