import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Panel,Table,Row,Col} from 'react-bootstrap';
class TablePage extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <div id="page-wrapper">
            <div className="container-fluid">
              <Row>
                <Col lg={12}>
                  <h1 className="page-header">Tables</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Panel header={(<h1>Kitchen Sink</h1>)}>
                    <Table striped bordered hover responsive>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </Col>
                <Col lg={6}>
                  <Panel header={(<h1>Basic Table</h1>)}>
                    <Table responsive>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Panel header={(<h1>Striped Rows</h1>)}>
                    <Table striped responsive>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </Col>
                <Col lg={6}>
                  <Panel header={(<h1>Bordered Table</h1>)}>
                    <Table responsive bordered>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Panel header={(<h1>Hover Rows</h1>)}>
                    <Table hover responsive>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </Col>
                <Col lg={6}>
                  <Panel header={(<h1>Context Classes</h1>)}>
                    <Table responsive>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="success">
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr className="info">
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr className="warning">
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr className="danger">
                              <td>4</td>
                              <td>John</td>
                              <td>Smith</td>
                              <td>@jsmith</td>
                          </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </Col>
              </Row>
            </div>
        </div>
      </div>

    );
  }
}

export default TablePage;
