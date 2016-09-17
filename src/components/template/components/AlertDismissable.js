import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import {Alert} from 'react-bootstrap';
class AlertDismissable extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      alertVisible: true
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }
  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.props.style_data} onDismiss={this.handleAlertDismiss}>
          {this.props.alert_detail} <a href="#" className="alert-link">Alert Link</a>
        </Alert>
      );
    }
    return(null);
  }


}
AlertDismissable.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired

  style_data: PropTypes.string.isRequired,
  alert_detail: PropTypes.string.isRequired
};
export default AlertDismissable;
