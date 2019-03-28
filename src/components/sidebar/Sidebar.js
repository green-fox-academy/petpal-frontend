import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestLogout, toggleHamburgerIcon } from '../../actions/user';
import '../../stylesheets/sidebar.scss';

const Sidebar = ({ isToggled, requestLogout, history, match, toggleHamburgerIcon }) => {
  const handleClick = event => {
    const { dataset } = event.target;
    if (dataset.menuitem) {
      dataset.menuitem === 'logout' ? requestLogout() : history.push(`${match.url}/${dataset.menuitem}`);
      setTimeout(() => {
        toggleHamburgerIcon(false);
      }, 100);
    }
  };

  return (
    <div className={isToggled ? 'sidebar activesidebar' : 'sidebar'}>
      <button type="button" data-menuitem="find" onClick={handleClick}>
        <i data-menuitem="find" className="fas fa-map-pin" />
        <span data-menuitem="find">finder</span>
      </button>
      <button type="button" data-menuitem="add" onClick={handleClick}>
        <i data-menuitem="add" className="fas fa-plus" />
        <span data-menuitem="add">add pet</span>
      </button>
      <button type="button" data-menuitem="favourites/liked" onClick={handleClick}>
        <i data-menuitem="favourites/liked" className="fas fa-star" />
        <span data-menuitem="favourites/liked">favourites</span>
      </button>
      <button type="button" data-menuitem="settings" onClick={handleClick}>
        <i data-menuitem="settings" className="fas fa-cog" />
        <span data-menuitem="settings">settings</span>
      </button>
      <button type="button" data-menuitem="logout" onClick={handleClick}>
        <i data-menuitem="logout" className="fas fa-sign-out-alt" />
        <span data-menuitem="logout">logout</span>
      </button>
    </div>
  );
};

const mapStateToProps = store => ({
  isToggled: store.toggles.isHamburgerToggled,
});

const mapDispatchToProps = {
  requestLogout,
  toggleHamburgerIcon,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Sidebar),
);
