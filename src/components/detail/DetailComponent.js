import { useState, useEffect } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import CastsList from '../castsList/CastsList';
import Video from '../video/Video';
import MovieList from '../movieList/MovieList';

const cx = classNames.bind(styles);

function DetailComponent({ ...props }) {
    const [item, setItem] = useState(null);
    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(props.category, props.id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [props.category, props.id]);
    return (
        <>
            {item && (
                <>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(${apiConfig.originImage(
                                item.backdrop_path || item.poster_path,
                            )})`,
                        }}
                    ></div>
                    <div className={cx('content', 'mb-3', 'container')}>
                        <div className={cx('poster')}>
                            <div
                                className={cx('img')}
                                style={{
                                    backgroundImage: `url(${apiConfig.w500Image(
                                        item.poster_path || item.backdrop_path,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('title')}>{item.title || item.name}</div>
                            <div className={cx('genres')}>
                                {item.genres.slice(0, 5).map((genre, i) => (
                                    <span key={i} className={cx('item')}>
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                            <div className={cx('overview')}>{item.overview}</div>
                            <div className={cx('casts')}>
                                <h3>Casts</h3>
                                <CastsList category={props.category} id={props.id} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('section', 'mb-3')}>
                            <Video category={props.category} id={props.id} />
                        </div>
                        <div className={cx('similar', 'mb-3')}>
                            <div className={cx('section', 'mb-3')}>
                                <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>Similar</div>
                                <MovieList category={props.category} id={props.id} type="similar" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default DetailComponent;
