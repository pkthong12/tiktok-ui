import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

import Image from '~/components/Image/Image';
const cx = classNames.bind(styles);

function AccountsItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} alt="avt" src={data.avatar} />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountsItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountsItem;
