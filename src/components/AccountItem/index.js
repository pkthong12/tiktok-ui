import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountsItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        alt="avt"
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bad679d6d45b98f5fdafae269fac1141~c5_100x100.webp?x-expires=1688652000&x-signature=kvZQkYtMI3qZZ2YneqwU6PHIJ00%3D"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyễn văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>Nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountsItem;
