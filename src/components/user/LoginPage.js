import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import {FormGroup,FormControl,ControlLabel,Row,Col,Panel} from 'react-bootstrap';
import LoginForm from './LoginForm';
import toastr from 'toastr';
import {connect} from 'react-redux'; // for connecting with react and redux
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/UserActions';
class LoginPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state= {
      user: Object.assign({}, this.props.user),
      errors: {},
      saving: false
    };
    this.updateState= this.updateState.bind(this);
    this.authUser=this.authUser.bind(this);
  }
  // for updating field when typing by user
  updateState(event){
    const field= event.target.name;
    // create state for user
    let user= this.state.user;
    user[field]= event.target.value;
    return this.setState({user: user});

  }
  authUser(event){
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.authUser(this.state.user)
      .then(()=> this.redirect())
      .catch(errors=>{
        let objErrors={};
        errors.map(function(objects,idx){
          if(objects.param=='email'){
            objErrors.email=objects.msg;
          }
          else if(objects.param=='password'){

              objErrors.password=objects.msg;
          }
        });
        toastr.error("Login Failed");
        this.setState({saving:false,errors:objErrors});
      });
  }
  // for redirect
  redirect(){
    this.setState({saving:false});
    toastr.success('Login Successfull');
    this.context.router.push('/courses');
  }
  render(){
    return (
      <div className="container">
        <Row>
          <Col md={4} mdOffset={4}>
            <Panel header={(<h3>Please Sign In</h3>)} className="login-panel">
              <LoginForm onChange={this.updateState}
              onSave={this.authUser}
              user={this.state.user}
              errors={this.state.errors}
              saving={this.state.saving}/>
            </Panel>
          </Col>
        </Row>
      </div>

    );
  }
}
LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions:PropTypes.object.isRequired,
};
// Pull in the React Router context so router is available on this.context.router.
LoginPage.contextTypes = {
  router: PropTypes.object
};
function mapStateToProps(state, ownProps) {
  let user={email:'',password:''};
  return {
    user: user,
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
