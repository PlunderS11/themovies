import { useState, useEffect } from 'react';
import tmdbApi from '../../api/tmdbApi';
import styles from './CastsList.module.scss';
import classNames from 'classnames/bind';
import apiConfig from '../../api/apiConfig';

const cx = classNames.bind(styles);

function CastsList({ ...props }) {
    const [casts, setCasts] = useState([]);
    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(props.category, props.id);
            setCasts(response.cast.slice(0, 5));
        };
        getCredits();
    }, [props.category, props.id]);
    return (
        <div className={cx('casts')}>
            {casts.map((item, i) => (
                <div key={i} className={cx('item')}>
                    <div
                        className={cx('img')}
                        style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}
                    ></div>
                    <div className={cx('name')}>{item.name}</div>
                </div>
            ))}
        </div>
    );
}

export default CastsList;
