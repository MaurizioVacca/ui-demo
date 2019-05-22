import { useState, useCallback } from 'react';

const STATUS_OPEN = true;
const STATUS_CLOSED = false;

const useModal = (defaultStatus = STATUS_CLOSED) => {
    const [isOpen, setIsOpen] = useState(defaultStatus);

    const toggle = useCallback((nextVal) => {
        if (typeof nextVal === 'boolean') {
            setIsOpen(nextVal);
        } else {
            setIsOpen(current => !current);
        }
    }, [setIsOpen]);

    return [isOpen, toggle];
};

export default useModal;

export { STATUS_CLOSED, STATUS_OPEN };
