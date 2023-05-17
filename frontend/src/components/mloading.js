import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const ModalLoading = () => {
    return (
        <div className="modal-loading d-flex align-items-center justify-content-center">
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    );
};

export default ModalLoading;
