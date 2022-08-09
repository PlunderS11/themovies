import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/tmovie.png';
import { useEffect, useRef } from 'react';

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
                <nav className={cx('nav')}>
                    {headerNav.map((element, i) => (
                        <NavLink key={i} className={(nav) => cx('item', { active: nav.isActive })} to={element.path}>
                            {element.display}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Header;
