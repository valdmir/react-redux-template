import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Row,Col,Panel} from 'react-bootstrap';
class TypographyPage extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <Row>
            <Col lg={12}>
              <h1 className="page-header">Typography</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Panel header={("Headings")}>
                <h1>Heading 1
                    <small>Sub-heading</small>
                </h1>
                <h2>Heading 2
                    <small>Sub-heading</small>
                </h2>
                <h3>Heading 3
                    <small>Sub-heading</small>
                </h3>
                <h4>Heading 4
                    <small>Sub-heading</small>
                </h4>
                <h5>Heading 5
                    <small>Sub-heading</small>
                </h5>
                <h6>Heading 6
                    <small>Sub-heading</small>
                </h6>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={("Paragraphs")}>
                <p className="lead">This is an example of lead body copy.</p>
                <p>This is an example of standard paragraph text. This is an example of <a href="#">link anchor text</a> within body copy.</p>
                <p>
                    <small>This is an example of small, fine print text.</small>
                </p>
                <p>
                    <strong>This is an example of strong, bold text.</strong>
                </p>
                <p>
                    <em>This is an example of emphasized, italic text.</em>
                </p>
                <br/>
                <h4>Alignment Helpers</h4>
                <p className="text-left">Left aligned text.</p>
                <p className="text-center">Center aligned text.</p>
                <p className="text-right">Right aligned text.</p>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={("Emphasis Classes")}>
                <p className="text-muted">This is an example of muted text.</p>
                <p className="text-primary">This is an example of primary text.</p>
                <p className="text-success">This is an example of success text.</p>
                <p className="text-info">This is an example of info text.</p>
                <p className="text-warning">This is an example of warning text.</p>
                <p className="text-danger">This is an example of danger text.</p>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Panel header={("Abbreviations")}>
                <p>The abbreviation of the word attribute is
                    <abbr title="attribute">attr</abbr>.</p>
                <p>
                    <abbr title="HyperText Markup Language" className="initialism">HTML</abbr>is an abbreviation for a programming language.</p>
                <br/>
                <h4>Addresses</h4>
                <address>
                    <strong>Twitter, Inc.</strong>
                    <br/>795 Folsom Ave, Suite 600
                    <br/>San Francisco, CA 94107
                    <br/>
                    <abbr title="Phone">P:</abbr>(123) 456-7890
                </address>
                <address>
                    <strong>Full Name</strong>
                    <br/>
                    <a href="mailto:#">first.last@example.com</a>
                </address>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={("Blockquotes")}>
                <h4>Default Blockquote</h4>
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
                <h4>Blockquote with Citation</h4>
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small>Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </small>
                </blockquote>
                <h4>Right Aligned Blockquote</h4>
                <blockquote className="pull-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header={("Lists")}>
                <h4>Unordered List</h4>
                <ul>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>
                        <ul>
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                        </ul>
                    </li>
                    <li>List Item</li>
                </ul>
                <h4>Ordered List</h4>
                <ol>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ol>
                <h4>Unstyled List</h4>
                <ul className="list-unstyled">
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
                <h4>Inline List</h4>
                <ul className="list-inline">
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
              </Panel>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default TypographyPage;
