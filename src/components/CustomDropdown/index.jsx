/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';

// core components
import Button from 'components/CustomButtons';

import customDropdownStyle from 'assets/jss/material-kit-react/components/customDropdownStyle.jsx';

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  handleClose = param => {
    this.setState({ open: false });
    if (this.props && this.props.onClick) {
      this.props.onClick(param);
    }
  };
  handleCloseAway = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const {
      classes,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding
    } = this.props;
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: open,
      [classes.caretRTL]: rtlActive
    });
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + 'Hover']]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive
    });
    let icon = null;
    switch (typeof buttonIcon) {
      case 'object':
        icon = <this.props.buttonIcon className={classes.buttonIcon} />;
        break;
      case 'string':
        icon = (
          <Icon className={classes.buttonIcon}>{this.props.buttonIcon}</Icon>
        );
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <Button
            aria-haspopup="true"
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          anchorEl={this.anchorEl}
          className={classNames({
            [classes.popperClose]: !open,
            [classes.popperResponsive]: true
          })}
          disablePortal
          open={open}
          placement={
            dropup
              ? left
                ? 'top-start'
                : 'top'
              : left
                ? 'bottom-start'
                : 'bottom'
          }
          transition
        >
          {() => (
            <Grow
              id="menu-list"
              in={open}
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList className={classes.menuList} role="menu">
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        className={classes.dropdownHeader}
                        onClick={() => this.handleClose(dropdownHeader)}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            className={classes.dropdownDividerItem}
                            key={key}
                            onClick={() => this.handleClose('divider')}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          className={dropdownItem}
                          key={key}
                          onClick={() => this.handleClose(prop)}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary'
};

CustomDropdown.propTypes = {
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  buttonProps: PropTypes.object,
  buttonText: PropTypes.node,
  caret: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  dropdownHeader: PropTypes.node,
  dropdownList: PropTypes.array,
  dropup: PropTypes.bool,
  hoverColor: PropTypes.oneOf([
    'black',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ]),
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  onClick: PropTypes.func,
  // function that retuns the selected item
  rtlActive: PropTypes.bool
};

export default withStyles(customDropdownStyle)(CustomDropdown);
