import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import logoGoogle from "./images/logo-google.png";
import logoFacebook from "./images/logo-facebook.png";

const LoginModal = (props) => {
  const { buttonLabel, className } = props;

  const _handleGoogleSignInClick = () => {
    // Open Google login page
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const _handleFacebookSignInClick = () => {
    // Open Facebook login page
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal centered isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Welcome to Kadam</ModalHeader>
        <ModalBody>
          <Button
            color="primary"
            onClick={toggle}
            block
            onClick={_handleGoogleSignInClick}
          >
            <div>
              <img classname="logo" src={logoGoogle} />
              Login with Google
            </div>
          </Button>{" "}
          <Button
            color="secondary"
            onClick={toggle}
            block
            onClick={_handleFacebookSignInClick}
          >
            <div>
              <img classname="logo" src={logoFacebook} />
              Login with Facebook
            </div>
          </Button>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default LoginModal;
