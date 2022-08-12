import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './HeroSlide.module.scss';
import classNames from 'classnames/bind';
import tmdbApi, { movieType } from '../../api/tmdbApi';
// import apiConfig from '../../api/apiConfig';
import HeroSlideItem from './heroSlideItem/HeroSlideItem';
import TrailerModal from './trailerModal/TrailerModal';

const cx = classNames.bind(styles);

function HeroSlide() {
    const [moviesItem, setMoviesItem] = useState([]);
    const [srcTrailer, setSrcTrailer] = useState('');
    const [id, setId] = useState('');
    const [active, setActive] = useState(false);
    SwiperCore.use([Autoplay]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMoviesItem(response.results.slice(16, 20));
            } catch (error) {
                console.log('error');
            }
        };
        getMovies();
    }, []);

    const callback = (chilData) => {
        setSrcTrailer(chilData.src);
        setActive(chilData.active);
        setId(chilData.id);
    };

    return (
        <div className={cx('hero-slide')}>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
            >
                {moviesItem.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem
                                item={item}
                                className={cx(isActive ? 'active' : '')}
                                callbackParent={callback}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {moviesItem.map((item, i) => (
                <TrailerModal id={id} active={active} key={i} src={srcTrailer} item={item} />
            ))}
        </div>
    );
}

export default HeroSlide;
