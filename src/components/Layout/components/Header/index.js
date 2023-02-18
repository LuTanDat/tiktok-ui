import classNames from 'classnames/bind';
import styles from './Header.module.scss'; // mac dinh style ko cho viet dau gach ngang

const cx = classNames.bind(styles); // cho phep style viet co dau gach ngang

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*logo*/}
                {/*logo*/}
            </div>
        </header>
    );
}

export default Header;
