import Modal, { ModalContent } from '../../modal/Modal';
import { useRef, useEffect } from 'react';

function TrailerModal({ ...props }) {
    const iframeRef = useRef(null);
    const id = props.id;
    let isActive = false;
    if (id === props.item.id) {
        isActive = true;
    }

    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 13 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
    return (
        <Modal active={isActive} id={`modal_${props.item.id}`}>
            <ModalContent>
                <iframe src={props.src} ref={iframeRef} width="100%" title="Trailer"></iframe>
            </ModalContent>
        </Modal>
    );
}

export default TrailerModal;
