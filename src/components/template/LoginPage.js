import React from 'react';
import {Link} from 'react-router';
import {FormGroup,FormControl,ControlLabel,Row,Col,Panel} from 'react-bootstrap';
class LoginPage extends React.Component{
  render(){
    return (
      <div className="container">
        <Row>
          <Col md={4} mdOffset={4}>
            <Panel header={(<h3>Please Sign In</h3>)} className="login-panel">
              <form role="form">
                  <fieldset>
                    <FormGroup>
                      <FormControl type="text" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                      <FormControl type="password" placeholder="Password"/>
                    </FormGroup>
                    <div className="checkbox">
                        <label>
                            <input className="remember" type="checkbox"/> Remember Me
                        </label>
                    </div>
                    {/*Change this to a button or input when using this as a form*/}
                    <a href="index.html" className="btn btn-lg btn-success btn-block">Login</a>
                  </fieldset>
              </form>
            </Panel>
          </Col>
        </Row>
      </div>

    );
  }
}

// export default LoginPage;
