import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Row,Col,Panel,FormGroup,FormControl,ControlLabel,HelpBlock,Checkbox,Radio,Button,InputGroup} from 'react-bootstrap';
class FormPage extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <div id="page-wrapper">
            <div className="container-fluid">
              <Row>
                <Col lg={12}>
                  <h1 className="page-header">Forms</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Panel header={(<h1>Basic Form Elements</h1>)}>
                    <Row>
                      <Col lg={6}>
                        <form role="form">
                          <FormGroup>
                            <ControlLabel>Text Input</ControlLabel>
                            <FormControl type="text"/>
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                          </FormGroup>
                          <FormGroup>
                            <ControlLabel>Text Input with Placeholder</ControlLabel>
                            <FormControl type="text" placeholder="Enter text"/>
                          </FormGroup>
                          <FormGroup>
                            <ControlLabel>Static Control</ControlLabel>
                            <FormControl.Static>email@example.com</FormControl.Static>
                          </FormGroup>
                          <FormGroup>
                            <ControlLabel>File input</ControlLabel>
                            <FormControl type="file" placeholder="Enter text"/>
                          </FormGroup>
                          <FormGroup>
                            <ControlLabel>File input</ControlLabel>
                            <FormControl componentClass="textarea" rows={3}/>
                          </FormGroup>
                          <FormGroup>
                            <ControlLabel>Checkboxes</ControlLabel>
                            <Checkbox>Checkbox 1</Checkbox>
                            <Checkbox>Checkbox 2</Checkbox>
                            <Checkbox>Checkbox 3</Checkbox>
                          </FormGroup>
                          <FormGroup>
                            <label>Inline Checkboxes</label>
                            <Checkbox inline>Checkbox 1</Checkbox>
                            <Checkbox inline>Checkbox 2</Checkbox>
                            <Checkbox inline>Checkbox 3</Checkbox>
                          </FormGroup>
                          <FormGroup>
                            <ControlLabel>Radio Button</ControlLabel>
                            <Radio>Radio 1</Radio>
                            <Radio>Radio 2</Radio>
                            <Radio>Radio 3</Radio>
                          </FormGroup>
                          <FormGroup>
                            <label>Inline Radio Buttons</label>
                            <Radio inline>Radio 1</Radio>
                            <Radio inline>Radio 2</Radio>
                            <Radio inline>Radio 3</Radio>
                          </FormGroup>
                          <FormGroup >
                            <ControlLabel>Selects</ControlLabel>
                            <FormControl componentClass="select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </FormControl>
                          </FormGroup>
                          <FormGroup >
                            <ControlLabel>Multiple Selects</ControlLabel>
                            <FormControl componentClass="select" multiple>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </FormControl>
                          </FormGroup>

                          <Button type="submit">Submit Button</Button>
                          <Button type="reset">Reset Button</Button>

                        </form>
                      </Col>
                      <Col lg={6}>
                        <h1>Disabled Form States</h1>
                          <form role="form">
                            <fieldset disabled>
                              <FormGroup>
                                <ControlLabel>Disabled Input</ControlLabel>
                                <FormControl type="text"  placeholder="Disabled Input" disabled/>
                              </FormGroup>
                              <FormGroup>
                                <ControlLabel>Disabled select menus</ControlLabel>
                                <FormControl componentClass="select">
                                  <option>Disabled Select</option>
                                </FormControl>
                              </FormGroup>
                              <Checkbox>Disabled Checkbox </Checkbox>
                              <Button type="submit" bsStyle="primary">Disabled Button</Button>
                            </fieldset>
                          </form>
                          <h1>Form Validation States</h1>
                          <form role="form">
                            <FormGroup validationState="success">
                              <ControlLabel>input with success</ControlLabel>
                              <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup validationState="warning">
                              <ControlLabel>input with warning</ControlLabel>
                              <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup validationState="error">
                              <ControlLabel>input with error</ControlLabel>
                              <FormControl type="text"/>
                            </FormGroup>
                          </form>
                          <h1>Input Groups</h1>
                          <form role="form">
                            <InputGroup>
                              <InputGroup.Addon>@</InputGroup.Addon>
                              <FormControl type="text" placeholder="Username"/>
                            </InputGroup>
                            <FormGroup>
                              <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup>
                                <InputGroup.Addon><i className="fa fa-eur"></i></InputGroup.Addon>
                                <FormControl type="text" placeholder="Font Awesome Icon" />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl type="text" placeholder="Font Awesome Icon" />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                              </InputGroup>
                            </FormGroup>

                            <FormGroup>
                              <InputGroup>
                                <FormControl type="text" />
                                  <InputGroup.Button>
                                    <Button><i className="fa fa-search"></i></Button>
                                  </InputGroup.Button>
                              </InputGroup>
                            </FormGroup>

                          </form>

                      </Col>
                    </Row>
                  </Panel>
                </Col>
              </Row>

            </div>
        </div>
      </div>

    );
  }
}

export default FormPage;
