import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" className={cx('avatar')}></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Trieu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nghe an</span>
            </div>
        </div>
    );
}

export default AccountItem;
