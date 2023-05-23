import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types'


export default function AlertDismissibleExample (props) {

    return (
      props.alert && <Alert variant="success">
        <p>{`${props.alert.type} : ${props.alert.mssg}`}</p>
      </Alert>
    );
  }

AlertDismissibleExample.propTypes = {
  alert : PropTypes.object
}