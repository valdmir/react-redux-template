import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Row,Col,Panel,Alert,ButtonToolbar,OverlayTrigger,Button,Tooltip,Popover} from 'react-bootstrap';
import AlertDismissable from './components/AlertDismissable';
import ModalComponent from './components/ModalComponent';

class NotificationPage extends React.Component{

  render(){
    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <Row>
            <Col lg={12}>
              <h1 className="page-header">Notifications</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Panel header={('Alert Styles')}>
                <Alert bsStyle="success">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                </Alert>
                <Alert bsStyle="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                </Alert>
                <Alert bsStyle="warning">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                </Alert>
                <Alert bsStyle="danger">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                </Alert>
              </Panel>
            </Col>
            <Col lg={6}>
              <Panel header={('Dismissable Alerts')}>
                <AlertDismissable style_data="success" alert_detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <AlertDismissable style_data="info" alert_detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <AlertDismissable style_data="warning" alert_detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <AlertDismissable style_data="danger" alert_detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Panel header={('Modals')}>
                <ModalComponent modal_body="Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
              </Panel>
            </Col>
            <Col lg={6}>
              <Panel header={("Tooltips and Popovers")}>
                <h4>Tooltip Demo</h4>
                <ButtonToolbar>
                  <OverlayTrigger placement="left" overlay={(<Tooltip>Tooltip on left</Tooltip>)}>
                    <Button bsStyle="default">Tooltip on left</Button>
                  </OverlayTrigger>

                  <OverlayTrigger placement="top" overlay={(<Tooltip>Tooltip on top</Tooltip>)}>
                    <Button bsStyle="default">Tooltip on top</Button>
                  </OverlayTrigger>

                  <OverlayTrigger placement="bottom" overlay={(<Tooltip>Tooltip on bottom</Tooltip>)}>
                    <Button bsStyle="default">Tooltip on bottom</Button>
                  </OverlayTrigger>

                  <OverlayTrigger placement="right" overlay={(<Tooltip>Tooltip on right</Tooltip>)}>
                    <Button bsStyle="default">Tooltip on right</Button>
                  </OverlayTrigger>
                </ButtonToolbar>
                <h4>Clickable Popover Demo</h4>
                  <ButtonToolbar>
                    <OverlayTrigger trigger="click" placement="left" overlay={(<Popover>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover>)}>
                      <Button bsStyle="default">Popover on left</Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" placement="top" overlay={(<Popover>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover>)}>
                      <Button bsStyle="default">Popover on top</Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" placement="bottom" overlay={(<Popover>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover>)}>
                      <Button bsStyle="default">Popover on bottom</Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" placement="right" overlay={(<Popover>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover>)}>
                      <Button bsStyle="default">Popover on right</Button>
                    </OverlayTrigger>
                  </ButtonToolbar>
              </Panel>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default NotificationPage;
