// import styles from './TrailerModal.module.scss';
// import classNames from 'classnames/bind';
import Modal, { ModalContent } from '../../modal/Modal';
import { useRef } from 'react';

// const cx = classNames.bind(styles);

function TrailerModal({ ...props }) {
    const iframeRef = useRef(null);
    console.log(props.src);
    const id = props.id;
    let isActive = false;
    if (id === props.item.id) {
        isActive = true;
    }
    console.log(isActive);
    const onClose = () => iframeRef.current;
    return (
        <Modal active={isActive} id={`modal_${props.item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe src={props.src} ref={iframeRef} width="100%" height="500px" title="Trailer"></iframe>
            </ModalContent>
        </Modal>
    );
}

export default TrailerModal;
