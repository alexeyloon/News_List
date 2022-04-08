import React from 'react';

import Modal from '@material-ui/core/Modal';

import PropTypes from 'prop-types';

function ModalWindow({
  open, children, onClose, id,
}) {
  return (

    <Modal onClose={onClose} id={id} open={open}>
      {children}
    </Modal>
  );
}

ModalWindow.defaultProps = {
  open: true,
};

ModalWindow.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.objectOf({}).isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalWindow;
