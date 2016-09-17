import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import {Button,Modal} from 'react-bootstrap';
class ModalComponent extends React.Component{
  constructor(props,context) {
    super(props,context);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }
  close() {
    this.setState({showModal: false});
  }
  open() {
   this.setState({ showModal: true });
  }
  render() {
    return(
      <div>
        <Button bsStyle="primary" bsSize="lg" onClick={this.open}>
            Launch Demo Modal
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.modal_body}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }


}
ModalComponent.propTypes={
  // dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired

  showModal: PropTypes.func.isRequired,
  modal_body: PropTypes.string.isRequired
};
export default ModalComponent;
