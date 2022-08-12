import Button from '../button/Button';
import { Link } from 'react-router-dom';
import MovieList from '../movieList/MovieList';

import styles from './SectionCategory.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SectionCategory({ ...props }) {
    return (
        <div className={cx('section', 'mb-3')}>
            <div className={cx('header', 'mb-2')}>
                <h2>{props.title}</h2>
                <Link to={props.link}>
                    <Button outline small className="small">
                        View more
                    </Button>
                </Link>
            </div>
            <MovieList category={props.category} type={props.type} />
        </div>
    );
}

export default SectionCategory;
