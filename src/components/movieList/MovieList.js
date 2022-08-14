import { SwiperSlide, Swiper } from 'swiper/react';
import styles from './MovieList.module.scss';
import classNames from 'classnames/bind';
import tmdbApi, { category } from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import MovieCard from '../movieCard/MovieCard';

const cx = classNames.bind(styles);

function MovieList({ ...props }) {
    const [items, setItems] = useState([]);
    const [width, setWidth] = useState('');

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        };
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const defaultWidth = document.body.offsetWidth;
        if (defaultWidth < 600) {
            const width = document.body.offsetWidth * 0.5 + 'px';
            setWidth(width);
        } else {
            const width = document.body.offsetWidth * 0.1445 + 'px';
            setWidth(width);
        }
    }, [width]);
    console.log(width);
    return (
        <div className={cx('movie-list')}>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {items.map((item, i) => (
                    <SwiperSlide key={i} style={{ width: `${width}` }}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MovieList;
