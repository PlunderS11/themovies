import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Modal({ ...props }) {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(props.active);
    }, [props.active]);
    return (
        <div id={props.id} className={cx('modal', active ? 'active' : '')}>
            {props.children}
        </div>
    );
}

export function ModalContent({ ...props }) {
    const contentRef = useRef(null);
    const closeModal = () => {
        contentRef.current.parentNode.className = cx('content', '');
        if (props.onClose) {
            props.onClose();
        }
    };
    return (
        <div ref={contentRef} className={cx('content')}>
            {props.children}
            <div className={cx('close')} onClick={closeModal}>
                <i className="bx bx-window-close"></i>
            </div>
        </div>
    );
}

export default Modal;
