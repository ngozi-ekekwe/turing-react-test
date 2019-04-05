import React from 'react';
import { Modal  } from 'react-bootstrap';


class AuthModal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { show, handleClose, form } = this.props;
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="auth-header">Sign In</div>
              <div>
                {form}
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
              Close
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default AuthModal;