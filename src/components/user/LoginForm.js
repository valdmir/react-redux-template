import React,{PropTypes} from 'react';
import {FormGroup,FormControl,Row,Col,Panel,Button,HelpBlock} from 'react-bootstrap';
const LoginForm = ({ user,onSave,onChange,saving,errors})=>{
  return (
    <form role="form">
        <fieldset>
          <FormGroup>
            <FormControl type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={onChange}
              />
            <HelpBlock>{errors.email}</HelpBlock>
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}

              onChange={onChange}
              />
            <HelpBlock>{errors.password}</HelpBlock>

          </FormGroup>
          {/*Change this to a button or input when using this as a form*/}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" onClick={onSave} disabled={saving}>
                {saving ? 'Loading...':'Login'}
              </Button>
            </Col>
          </FormGroup>
        </fieldset>
    </form>
  );
};
LoginForm.propTypes={
  user:PropTypes.object.isRequired,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  saving:PropTypes.bool,
  errors:PropTypes.object

};
export default LoginForm;
