import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected option"
            ariaHideApp={false}
            onRequestClose={props.handleModalClose}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={200}
            className='modal'
        >
            <h3 className='modal__title'>Selected:</h3>
            <h2 className='modal__body'>{props.selectedOption}</h2>
            <button className='button' onClick={props.handleModalClose}>OK</button>
        </Modal>
);

export default OptionModal;