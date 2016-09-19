import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as expenseActions from '../../actions/expenseActions';
import ExpenseForm from './ExpenseForm';
import toastr from 'toastr';
class ManageExpensePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state= {
      expense: Object.assign({}, this.props.expense),
      errors: {},
      saving: false
    };
    this.updateExpenseState= this.updateExpenseState.bind(this);
    this.saveExpense=this.saveExpense.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.expense._id != nextProps.expense._id){
      // Necessary to populate form when existing course is loaded directly.
      this.setState({expense: Object.assign({},nextProps.expense)});
    }
  }
  updateExpenseState(event){
    const field= event.target.name;
    let expense= this.state.expense;
    expense[field]= event.target.value;
    return this.setState({expense: expense});

  }
  saveExpense(event){
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveExpense(this.state.expense)
      .then(()=> this.redirect())
      .catch(error=>{
        toastr.error(error);
        this.setState({saving:false});
      });
  }
  redirect(){
    this.setState({saving:false});
    toastr.success('Expense saved');
    this.context.router.push('/expenses');
  }
  render() {
    return (
      <div id="wrapper">
        <div id="page-wrapper">
        <ExpenseForm
          allAuthors={this.props.authors}
          onChange={this.updateExpenseState}
          onSave={this.saveExpense}
          expense={this.state.expense}
          errors={this.state.errors}
          saving={this.state.saving}/>
        </div>
      </div>
    );
  }
}
ManageExpensePage.propTypes = {
  expense: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired,
};
// Pull in the React Router context so router is available on this.context.router.
ManageExpensePage.contextTypes = {
  router: PropTypes.object
};
function getCourseById(courses,id){
  const course= courses.filter(course=>course.id==id);
  if(course) return course[0];
  return null;
}
function mapStateToProps(state, ownProps) {
  const courseId= ownProps.params.id; //from the path '/course/:id'
  let expense={_id:'',description:'',expense_date:'',type:'',amount: ''};
  // if(courseId && state.courses.length> 0) {
  //   course=getCourseById(state.courses, courseId);
  // }
  const authorsFormattedForDropdown= state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' '+author.lastName
    };
  });
  return {
    expense: expense,
    authors:authorsFormattedForDropdown
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(expenseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageExpensePage);
