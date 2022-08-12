import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { category } from '../../api/tmdbApi';
import classNames from 'classnames/bind';
import style from './MovieSearch.module.scss';
import Button from '../button/Button';

const cx = classNames.bind(style);

function MovieSearch({ ...props }) {
    const inputRef = useRef();
    const navigate = useNavigate();
    const [keywords, setKeyword] = useState(props.keyword ? props.keyword : '');
    const gotoSearch = useCallback(() => {
        if (keywords.trim().length > 0) {
            navigate(`/${category[props.category]}/search/${keywords}`);
        }
    }, [keywords, navigate, props.category]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setKeyword(searchValue);
        }
    };

    const handleClear = () => {
        setKeyword('');
        inputRef.current.focus();
    };
    return (
        <div className={cx('movie-search')}>
            <input
                ref={inputRef}
                value={keywords}
                placeholder="Search something..."
                spellCheck={false}
                onChange={handleChange}
            />
            <button className={cx('clear')} onClick={handleClear}>
                <i className="bx bxs-x-circle" style={{ color: 'rgba(255,255,255)' }}></i>
            </button>
            <Button primary onClick={gotoSearch}>
                Search
            </Button>
        </div>
    );
}

export default MovieSearch;
