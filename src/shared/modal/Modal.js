import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { STATUS_CLOSED, STATUS_OPEN } from './useModal';
import ModalBackground from './ModalBackground';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';

const propTypes = {
    defaultStatus: PropTypes.bool,
    origin: PropTypes.shape({}),
    content: PropTypes.shape({}),
    onClickOutside: PropTypes.func
};

const defaultProps = {
    status: STATUS_CLOSED,
    className: '',
    origin: {},
    content: {},
    onClickOutside: () => {}
};

const Modal = ({ status, children, onClickOutside }) => {
    const backgroundRef = useRef(null);

    const runOnEnterAnimation = () => {
        if (status === STATUS_OPEN) {
            const { current: domNode } = backgroundRef;

            domNode.setAttribute('style', 'transform: scale(1, 1); opacity: 1;');
        }
    };

    const handleOutsideClick = () => {
        if (status === STATUS_OPEN) {
            const { current: domNode } = backgroundRef;

            domNode.setAttribute('style', 'transform: scale(1, 0)');
            setTimeout(() => onClickOutside(), 100);
        }
    };

    const bindOnBackgroundClick = () => {
        const { current: domNode } = backgroundRef;

        if (domNode) {
            domNode.addEventListener('click', handleOutsideClick);

            return () => domNode.removeEventListener('click', handleOutsideClick);
        }

        return () => {};
    };

    useEffect(runOnEnterAnimation);

    useEffect(bindOnBackgroundClick);

    return status && (
        <ModalOverlay>
            <ModalBackground ref={backgroundRef} />
            <ModalContent>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
