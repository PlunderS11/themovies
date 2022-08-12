import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/tmovie.png';
import { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
];
function Header() {
    const headerRef = useRef(null);
    const { pathname } = useLocation();

    const active = headerNav.findIndex((e) => e.path === pathname);
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.className = cx('header', { shrink: 'shrink' });
            } else {
                headerRef.current.className = cx('header', { shrink: '' });
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className={cx('header')}>
            <div className={cx('wrap')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                    <Link to="/">PlunMy</Link>
                </div>
                <ul className={cx('nav')}>
                    {headerNav.map((element, i) => (
                        <li key={i} className={cx(i === active ? 'active' : '')}>
                            <Link to={element.path}>{element.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
