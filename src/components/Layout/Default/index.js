import Header from '../../../components/Layout/components/Header';
import Slider from './SlideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Slider></Slider>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
