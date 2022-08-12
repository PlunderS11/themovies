import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function Video({ ...props }) {
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className={cx('video')}>
            <iframe
                ref={iframeRef}
                src={`https://2embed.org/embed/${props.id}`}
                width="100%"
                title="video"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
}

export default Video;
