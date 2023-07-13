import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faPlus,
  faEllipsisVertical,
  faCircleQuestion,
  faKeyboard,
  faEarthAsia,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons/Icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          code: 'vn',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và hỗ trợ',
    to: './feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt',
  },
];
function Header() {
  const handleMenuchange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '/@hoa',
    },
    {
      icon: <FontAwesomeIcon icon={faBitcoin} />,
      title: 'Nhận Xu',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignIn} />,
      title: 'Đăng xuất',
      to: './logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" delay={200}>
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <button className={cx('action-btn')}>
                <MessageIcon />
              </button>
              <button className={cx('action-btn')}>
                <InboxIcon />
              </button>
            </>
          ) : (
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <>
            <Menu items={currentUser ? userMenu : MENU_ITEMS} onchange={handleMenuchange}>
              {currentUser ? (
                <Image
                  className={cx('user-avatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bad679d6d45b98f5fdafae269fac1141~c5_100x100.jpeg?x-expires=1688828400&x-signature=Scx4pQ%2Fapua5MvSE7IuQAj2z1ZU%3D"
                  alt="dd"
                  // fallback=''
                />
              ) : (
                <>
                  <button className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </>
              )}
            </Menu>
          </>
        </div>
      </div>
    </header>
  );
}
export default Header;
