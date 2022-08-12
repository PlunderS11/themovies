import { useParams } from 'react-router-dom';
import PageHeader from '../components/page/PageHeader';
import { category as cate } from '../api/tmdbApi';
import classNames from 'classnames/bind';
import style from './Pages.module.scss';
import MovieGrid from '../components/movieGrid/MovieGrid';
const cx = classNames.bind(style);

function Catalog() {
    let { category } = useParams();
    return (
        <div>
            <PageHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</PageHeader>
            <div className={cx('container')}>
                <div className={cx('section', 'mb-3')}>
                    <MovieGrid category={category} />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
