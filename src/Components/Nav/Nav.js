import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faStar,
  faUser,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import ModalCategory from '../ModalCategory/ModalCategory';
import { srcs } from '../../config';
import './Nav.scss';

class Nav extends React.Component {
  state = {
    isActive: 0,
    mobileMenuActive: false,
  };

  selectedMenu = (num) => {
    this.setState({
      isActive: num,
    });
  };

  closeModal = () => {
    this.setState({
      isActive: 0,
    });
  };

  handleMobileMenu = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    });
  };

  render() {
    const { isActive, mobileMenuActive } = this.state;
    return (
      <div className="Nav">
        <div className="NavWrapper">
          <div className="boldLine" />
          <img src={srcs.img.logo.black} alt="chanel logo" />
          <FontAwesomeIcon
            className="hamburgerBtn"
            onClick={this.handleMobileMenu}
            icon={faBars}
          />
          <div className="iconWrapper">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <FontAwesomeIcon className="userIcon" icon={faUser} />
            <FontAwesomeIcon className="starIcon" icon={faStar} />
          </div>
          <div
            className="MobileMenuWrapper"
            style={{ display: mobileMenuActive ? 'block' : 'none' }}
          >
            <MobileMenu
              isActive={isActive}
              handleSelectedMobileMenu={() => this.selectedMenu}
              mobileMenuActive={this.handleMobileMenu}
            />
          </div>
          <ul className="desktopMenuList">
            <li
              className={isActive === 1 ? 'active' : 'none'}
              onClick={() => this.selectedMenu(1)}
            >
              오뜨 꾸뛰르
            </li>
            <li
              className={isActive === 2 ? 'active' : 'none'}
              onClick={() => this.selectedMenu(2)}
            >
              컬렉션
            </li>
            <li
              className={isActive === 3 ? 'active' : 'none'}
              onClick={() => this.selectedMenu(3)}
            >
              카테고리
            </li>
            <li
              className={isActive === 4 ? 'active' : 'none'}
              onClick={() => this.selectedMenu(4)}
            >
              CHANEL NEWS
            </li>
          </ul>
        </div>
        <ModalCategory
          currentMenu={isActive}
          handleCloseBtn={this.closeModal}
        />
      </div>
    );
  }
}

class MobileMenu extends React.Component {
  render() {
    const { isActive, mobileMenuActive, handleSelectedMobileMenu } = this.props;
    return (
      <div className="MobileMenu">
        <div className="menuWrapper">
          <p>메뉴</p>
          <FontAwesomeIcon
            className="closeBtn"
            onClick={mobileMenuActive}
            icon={faTimes}
          />
          <ul className="mobileMenuList">
            <li
              className={isActive === 1 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(1)}
            >
              오뜨 꾸뛰르
            </li>
            <li
              className={isActive === 2 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(2)}
            >
              컬렉션
            </li>
            <li
              className={isActive === 3 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(3)}
            >
              카테고리
            </li>
            <li
              className={isActive === 4 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(4)}
            >
              CHANEL NEWS
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
