import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const ExpenseListRow =({ expense})=> {
  return (
    <tr>
      <td><Link to={'/expense/' + expense._id}>{expense.description}</Link></td>
      <td>{expense.expense_date}</td>
      <td>{expense.type_name}</td>
      <td>{expense.amount}</td>
    </tr>

  );
};

ExpenseListRow.propTypes ={
  expense: PropTypes.object.isRequired
};

export default ExpenseListRow;
