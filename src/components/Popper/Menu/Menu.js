import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items, hideOnClick = false, onchange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onclick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onchange(item);
            }
          }}
        />
      );
    });
  };
  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu-poper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack}></Header>}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  //Reset to first page
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 700]}
      // visible
      placement="bottom-end"
      interactive={true}
      hideOnClick={hideOnClick}
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onchange: PropTypes.func,
};
export default Menu;
