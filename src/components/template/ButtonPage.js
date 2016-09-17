import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Button,ButtonToolbar,Row,Col,Panel} from 'react-bootstrap';
class ButtonPage extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <Row>
            <Col lg={12}>
              <h1 className="page-header">Buttons</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Panel header={('Default Buttons')}>
                <h4>Normal Buttons</h4>
                <ButtonToolbar>
                  <Button>Default</Button>
                  <Button bsStyle="primary">Primary</Button>
                  <Button bsStyle="success">Success</Button>
                  <Button bsStyle="info">Info</Button>
                  <Button bsStyle="warning">Warning</Button>
                  <Button bsStyle="danger">Danger</Button>
                  <Button bsStyle="link">Link</Button>
                </ButtonToolbar>
                <br/>
                <h4>Disabled Buttons</h4>
                  <ButtonToolbar>
                    <Button>Default</Button>
                    <Button bsStyle="primary" disabled>Primary</Button>
                    <Button bsStyle="success" disabled>Success</Button>
                    <Button bsStyle="info" disabled>Info</Button>
                    <Button bsStyle="warning" disabled>Warning</Button>
                    <Button bsStyle="danger" disabled>Danger</Button>
                    <Button bsStyle="link" disabled>Link</Button>
                  </ButtonToolbar>
                <br/>
                <h4>Button Sizes</h4>
                  <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large">Large button</Button>
                    <Button bsStyle="primary" >Default button</Button>
                    <Button bsStyle="primary" bsSize="small">Small button</Button>
                    <Button bsStyle="primary" bsSize="xsmall">Mini button</Button>
                  </ButtonToolbar>
                  <div style={{margin:'20px 0 20px 0 '}}>
                    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                  </div>
                  <div className="well" style={{maxWidth: 400, margin: '0 auto 10px'}}>
                    <Button bsStyle="primary" block>Block level button</Button>
                  </div>
              </Panel>
              <Panel header={('Circle icon Buttons with Font Awesome Icons')}>
                <h4>Normal Circle Buttons</h4>
                <ButtonToolbar>
                  <Button className="btn-circle"><i className="fa fa-check"></i></Button>
                  <Button className="btn-circle" bsStyle="primary"><i className="fa fa-list"></i></Button>
                  <Button className="btn-circle" bsStyle="success"><i className="fa fa-link"></i></Button>
                  <Button className="btn-circle" bsStyle="info"><i className="fa fa-check"></i></Button>
                  <Button className="btn-circle" bsStyle="warning"><i className="fa fa-times"></i></Button>
                  <Button className="btn-circle" bsStyle="danger"><i className="fa fa-heart"></i></Button>
                </ButtonToolbar>
                <br/>
                <br/>
                <h4>Large Circle Buttons</h4>
                <ButtonToolbar>
                  <Button className="btn-circle" bsSize="large"><i className="fa fa-check"></i></Button>
                  <Button className="btn-circle" bsStyle="primary" bsSize="large"><i className="fa fa-list"></i></Button>
                  <Button className="btn-circle" bsStyle="success" bsSize="large"><i className="fa fa-link"></i></Button>
                  <Button className="btn-circle" bsStyle="info" bsSize="large"><i className="fa fa-check"></i></Button>
                  <Button className="btn-circle" bsStyle="warning" bsSize="large"><i className="fa fa-times"></i></Button>
                  <Button className="btn-circle" bsStyle="danger" bsSize="large"><i className="fa fa-heart"></i></Button>
                </ButtonToolbar>
                <br/>
                <br/>
                <h4>Extra Large Circle Buttons</h4>
                <ButtonToolbar>
                  <Button className="btn-circle" bsSize="xl"><i className="fa fa-check"></i></Button>
                  <Button className="btn-circle" bsStyle="primary" bsSize="xl"><i className="fa fa-list"></i></Button>
                  <Button className="btn-circle" bsStyle="success" bsSize="xl"><i className="fa fa-link"></i></Button>
                  <Button className="btn-circle" bsStyle="info" bsSize="xl"><i className="fa fa-check"></i></Button>
                  <Button className="btn-circle" bsStyle="warning" bsSize="xl"><i className="fa fa-times"></i></Button>
                  <Button className="btn-circle" bsStyle="danger" bsSize="xl"><i className="fa fa-heart"></i></Button>
                </ButtonToolbar>
              </Panel>
            </Col>
            <Col lg={6}>
              <Panel Header={('Outline Buttons with Smooth Transition')}>
                <h4>Outline Buttons</h4>
                <ButtonToolbar>
                  <Button className="btn-outline">Default</Button>
                  <Button className="btn-outline" bsStyle="primary">Primary</Button>
                  <Button className="btn-outline" bsStyle="success">Success</Button>
                  <Button className="btn-outline" bsStyle="info">Info</Button>
                  <Button className="btn-outline" bsStyle="warning">Warning</Button>
                  <Button className="btn-outline" bsStyle="danger">Danger</Button>
                  <Button className="btn-outline" bsStyle="link">Link</Button>
                </ButtonToolbar>
                <br/>
                <h4>Outline Button Sizes</h4>
                <ButtonToolbar>
                  <Button className="btn-outline" bsStyle="primary" bsSize="large">Large button</Button>
                  <Button className="btn-outline" bsStyle="primary" >Default button</Button>
                  <Button className="btn-outline" bsStyle="primary" bsSize="small">Small button</Button>
                  <Button className="btn-outline" bsStyle="primary" bsSize="xs">Mini button</Button>
                </ButtonToolbar>
                <br/>
                <Button  className="btn-outline" bsStyle="primary" bsSize="large" block>Block level button</Button>


              </Panel>
              <Panel Header={('Social Buttons with Font Awesome Icons')}>
                <h4>Social Buttons With tag a</h4>
                <a className="btn btn-block btn-social btn-bitbucket">
                    <i className="fa fa-bitbucket"></i> Sign in with Bitbucket
                </a>
                <a className="btn btn-block btn-social btn-dropbox">
                    <i className="fa fa-dropbox"></i> Sign in with Dropbox
                </a>
                <a className="btn btn-block btn-social btn-facebook">
                    <i className="fa fa-facebook"></i> Sign in with Facebook
                </a>
                <a className="btn btn-block btn-social btn-flickr">
                    <i className="fa fa-flickr"></i> Sign in with Flickr
                </a>
                <a className="btn btn-block btn-social btn-github">
                    <i className="fa fa-github"></i> Sign in with GitHub
                </a>
                <a className="btn btn-block btn-social btn-google-plus">
                    <i className="fa fa-google-plus"></i> Sign in with Google
                </a>
                <a className="btn btn-block btn-social btn-instagram">
                    <i className="fa fa-instagram"></i> Sign in with Instagram
                </a>
                <a className="btn btn-block btn-social btn-linkedin">
                    <i className="fa fa-linkedin"></i> Sign in with LinkedIn
                </a>
                <a className="btn btn-block btn-social btn-pinterest">
                    <i className="fa fa-pinterest"></i> Sign in with Pinterest
                </a>
                <a className="btn btn-block btn-social btn-tumblr">
                    <i className="fa fa-tumblr"></i> Sign in with Tumblr
                </a>
                <a className="btn btn-block btn-social btn-twitter">
                    <i className="fa fa-twitter"></i> Sign in with Twitter
                </a>
                <a className="btn btn-block btn-social btn-vk">
                    <i className="fa fa-vk"></i> Sign in with VK
                </a>
                <h4>Social Buttons With tag button </h4>
                <Button className="btn-social btn-bitbucket" block><i className="fa fa-bitbucket"></i> Sign in with Bitbucket</Button>
                <Button className="btn-social btn-dropbox" block><i className="fa fa-dropbox"></i> Sign in with Dropbox</Button>
                <Button className="btn-social btn-facebook" block><i className="fa fa-facebook"></i> Sign in with Facebook</Button>
                <Button className="btn-social btn-flickr" block><i className="fa fa-flickr"></i> Sign in with Flickr</Button>
                <Button className="btn-social btn-github" block><i className="fa fa-github"></i> Sign in with Github</Button>
                <Button className="btn-social btn-google-plus" block><i className="fa fa-google-plus"></i> Sign in with Google</Button>
                <Button className="btn-social btn-instagram" block><i className="fa fa-instagram"></i> Sign in with Instagram</Button>


                <hr/>

                <div className="text-center">
                    <Button className="btn-social-icon btn-bitbucket"><i className="fa fa-bitbucket"></i></Button>
                    <a className="btn btn-social-icon btn-bitbucket"><i className="fa fa-bitbucket"></i></a>
                    <a className="btn btn-social-icon btn-dropbox"><i className="fa fa-dropbox"></i></a>
                    <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-flickr"><i className="fa fa-flickr"></i></a>
                    <a className="btn btn-social-icon btn-github"><i className="fa fa-github"></i></a>
                    <a className="btn btn-social-icon btn-google-plus"><i className="fa fa-google-plus"></i></a>
                    <a className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram"></i></a>
                    <a className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-pinterest"><i className="fa fa-pinterest"></i></a>
                    <a className="btn btn-social-icon btn-tumblr"><i className="fa fa-tumblr"></i></a>
                    <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-vk"><i className="fa fa-vk"></i></a>
                </div>
              </Panel>
            </Col>
          </Row>

        </div>
      </div>

    );
  }
}

export default ButtonPage;
