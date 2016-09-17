import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Row,Col} from 'react-bootstrap';
class BlankPage extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <div id="page-wrapper">
            <div className="container-fluid">
              <Row>
                <Col lg={12}>
                  <h1 className="page-header">Blank</h1>
                </Col>
              </Row>
            </div>
        </div>
      </div>

    );
  }
}

export default BlankPage;
