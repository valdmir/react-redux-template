import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Panel,Tabs,Tab,Row,Col,Accordion,Nav,NavItem,Well,Jumbotron} from 'react-bootstrap';
class PanelWellPage extends React.Component{

  render(){
    const panel_header_default =(
      <span>Default Panel</span>
    );
    const panel_header_primary =(
      <span>Primary Panel</span>
    );

    const panel_header_success =(
      <span>Success Panel</span>
    );
    const panel_header_info =(
      <span>Info Panel</span>
    );
    const panel_header_warning =(
      <span>Warning Panel</span>
    );
    const panel_header_danger =(
      <span>Danger Panel</span>
    );
    const panel_footer =(
      <span>Panel Footer</span>
    );

    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <Row>
            <Col lg={12}>
              <h1 className="page-header">Blank</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Panel header={panel_header_default} footer={panel_footer}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={panel_header_primary} footer={panel_footer} bsStyle="primary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={panel_header_success} footer={panel_footer} bsStyle="success">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Panel header={panel_header_info} footer={panel_footer} bsStyle="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={panel_header_warning} footer={panel_footer} bsStyle="warning">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={panel_header_danger} footer={panel_footer} bsStyle="danger">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>

              <div className="panel panel-green">
                  <div className="panel-heading">
                      Green Panel
                  </div>
                  <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                  </div>
                  <div className="panel-footer">
                      Panel Footer
                  </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="panel panel-yellow">
                  <div className="panel-heading">
                      Yellow Panel
                  </div>
                  <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                  </div>
                  <div className="panel-footer">
                      Panel Footer
                  </div>
              </div>
            </Col>
            <Col lg={4}>
                <div className="panel panel-red">
                    <div className="panel-heading">
                        Red Panel
                    </div>
                    <div className="panel-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                    </div>
                    <div className="panel-footer">
                        Panel Footer
                    </div>
                </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>

              <Panel header={(<h1>Collapsible Accordion Panel Group</h1>)}>
                <Accordion defaultActiveKey="1">
                  <Panel header="Collapsible Group Item #1" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #2" eventKey="2">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #3" eventKey="3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
              </Panel>

            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Panel header={('Basic Tabs')}>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="Home">
                    <h4>Home Tab</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Tab>
                  <Tab eventKey={2} title="Profile">
                    <h4>Profile Tab</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Tab>
                  <Tab eventKey={3} title="Messages">
                    <h4>Messages Tab</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Tab>
                  <Tab eventKey={4} title="Settings">
                    <h4>Settings Tab</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Tab>

                </Tabs>

              </Panel>
            </Col>
            <Col lg={6}>
              <Panel header={('Pill Tabs')}>
                <Tab.Container id="testing" defaultActiveKey="home-pills">
                  <Row>
                    <Col lg={12}>
                      <Nav bsStyle="pills">
                        <NavItem eventKey="home-pills">Home</NavItem>
                        <NavItem eventKey="profile-pills">Profile</NavItem>
                        <NavItem eventKey="messages-pills">Messages</NavItem>
                        <NavItem eventKey="settings-pills">Settings</NavItem>
                      </Nav>
                    </Col>
                    <Col lg={12}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="home-pills">
                          <h4>Home Tab</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="profile-pills">
                          <h4>Profile Tab</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="messages-pills">
                          <h4>Messages Tab</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="settings-pills">
                          <h4>Settings Tab</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Well>
                <h4>Normal Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Well>

            </Col>
            <Col lg={4}>
              <Well bsSize="large">
                <h4>Large Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Well>

            </Col>
            <Col lg={4}>
              <Well bsSize="small">
                <h4>Small Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </Well>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Jumbotron>
                <h1>Jumbotron</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
                <p><a className="btn btn-primary btn-lg" role="button">Learn more</a></p>
              </Jumbotron>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default PanelWellPage;
