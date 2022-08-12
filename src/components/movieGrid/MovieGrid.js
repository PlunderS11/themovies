import classNames from 'classnames/bind';
import style from './MovieGrid.module.scss';
import MovieCard from '../movieCard/MovieCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import Button from '../button/Button';
import MovieSearch from '../movieSearch/MovieSearch';

const cx = classNames.bind(style);

function MovieGrid({ ...props }) {
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    let { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                        break;
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdbApi.search(props.category, { params });
            }
            setItem(response.results);
            setTotalPage(response.total_pages);
        };
        getList();
    }, [keyword, props.category]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            response = await tmdbApi.search(props.category, { params });
        }
        setItem([...item, ...response.results]);
        setPage(page + 1);
    };

    return (
        <>
            <div className={cx('section', 'mb-3')}>
                <MovieSearch keyword={keyword} category={props.category} />
            </div>
            <div className={cx('movie-grid')}>
                {item.map((item, i) => (
                    <MovieCard key={i} category={props.category} item={item} />
                ))}
            </div>
            {page < totalPage ? (
                <div className={cx('load-more')}>
                    <Button outline small onClick={loadMore}>
                        Load more
                    </Button>
                </div>
            ) : (
                <h2>No results for "{keyword}"!</h2>
            )}
        </>
    );
}

export default MovieGrid;
