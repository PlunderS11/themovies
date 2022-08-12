import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="" />
                        <Link to="/" style={{ width: '10%' }}>
                            PlunMy
                        </Link>
                    </div>
                </div>
                <div className={cx('menu')}>
                    <div className={cx('item')}>
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
