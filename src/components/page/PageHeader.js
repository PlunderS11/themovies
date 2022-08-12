import classNames from 'classnames/bind';
import style from './PageHeader.module.scss';
import bg from '../../assets/footer-bg.jpg';

const cx = classNames.bind(style);

function PageHeader({ ...props }) {
    return (
        <div className={cx('page-header')} style={{ backgroundImage: `url(${bg})` }}>
            <div className={cx('title')}>{props.children}</div>
        </div>
    );
}

export default PageHeader;
