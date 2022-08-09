import { useNavigate } from 'react-router-dom';
import apiConfig from '../../../api/apiConfig';
import styles from './HeroSlideItem.module.scss';
import classNames from 'classnames/bind';
import Button from '../../button/Button';
import tmdbApi, { category } from '../../../api/tmdbApi';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HeroSlideItem({ ...props }) {
    const item = props.item;
    const className = props.className;
    const cb = props.callbackParent;
    const [active, setActive] = useState(false);
    const [src, setSrc] = useState('');
    const [id, setId] = useState('');
    const history = useNavigate();
    const background = apiConfig.originImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const videos = await tmdbApi.getVideos(category.movie, item.id);
        if (videos.results.length > 0) {
            const videoSrc = 'http://www.youtube.com/embed/' + videos.results[0].key;
            setSrc(videoSrc);
            setActive(true);
            setId(item.id);
        }
    };

    setModalActive();
    const sendData = () => {
        cb({
            id,
            src,
            active,
        });
    };

    return (
        <div
            className={cx('item', `${item.id}`, { [className]: className })}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>{item.title}</h2>
                    <div className={cx('overview')}>{item.overview}</div>
                    <div className={cx('btn')}>
                        <Button primary onClick={() => history.push('/movie/' + item.id)}>
                            Watch Now
                        </Button>
                        <Button outline onClick={sendData}>
                            Watch Trailer
                        </Button>
                    </div>
                </div>
                <div className={cx('poster')}>
                    <img src={apiConfig.w500Image(item.poster_path)} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default HeroSlideItem;
