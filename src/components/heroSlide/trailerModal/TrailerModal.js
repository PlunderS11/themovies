import Modal, { ModalContent } from '../../modal/Modal';
import { useRef } from 'react';

function TrailerModal({ ...props }) {
    const iframeRef = useRef(null);
    const id = props.id;
    let isActive = false;
    if (id === props.item.id) {
        isActive = true;
    }
    return (
        <Modal active={isActive} id={`modal_${props.item.id}`}>
            <ModalContent>
                <iframe src={props.src} ref={iframeRef} width="100%" height="500px" title="Trailer"></iframe>
            </ModalContent>
        </Modal>
    );
}

export default TrailerModal;
