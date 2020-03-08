import React from 'react';

import './Modal.css';

const Modal = ({ description, hideModal, idx, handleChange }) => (
    <div className="edit-description">
        <form>
            <div className="group">
                <textarea
                    className="form-input"
                    name="description"
                    onChange={handleChange}
                    placeholder={description}
                />
            </div>
        </form>
        <div className="buttons">
            <button className="custom-button" onClick={() => hideModal(idx)}>Update description</button>
        </div>
    </div>
);

export default Modal;
