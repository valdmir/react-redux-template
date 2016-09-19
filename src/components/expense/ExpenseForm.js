import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ExpenseForm = ({expense,allAuthors, onSave,onChange,saving,errors})=>{
  return (
    <form>
      <h1> Manage Expense </h1>
      <TextInput
        name="description"
        label="Description"
        value={expense.title}
        onChange={onChange}
        error={errors.title}/>
      <TextInput
        name="expense_date"
        label="Expense Date"
        value={expense.expense_date}
        onChange={onChange}
        error={errors.expense_date}/>
      <SelectInput
        name="authorId"
        label="Author"
        value={expense.type}
        defaultOption="Select Type"
        options={allAuthors}
        onChange={onChange} error={errors.type}/>

      <TextInput
        name="amount"
        label="Amount"
        value={expense.amount}
        onChange={onChange}
        error={errors.amount}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...':'Save'}
        className="btn btn-primary"
        onClick={onSave}
        />
    </form>
  );
};
ExpenseForm.propTypes={
  expense:PropTypes.object.isRequired,
  allAuthors:PropTypes.array,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  saving:PropTypes.bool,
  errors:PropTypes.object

};
export default ExpenseForm;
