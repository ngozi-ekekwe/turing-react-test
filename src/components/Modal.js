import React from 'react';
import { Modal  } from 'react-bootstrap';


class AuthModal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { show, handleClose, form, title } = this.props;
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <img src="/static/close.png" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="auth-header">{title}</div>
              <div>
                {form}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AuthModal;