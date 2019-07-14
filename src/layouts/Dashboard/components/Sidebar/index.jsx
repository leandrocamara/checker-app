import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Externals
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'

// Material icons
import { DashboardOutlined as DashboardIcon } from '@material-ui/icons'

// Component styles
import styles from './styles'

// Shared services
import { getUserAuthenticated } from 'services/auth'

class Sidebar extends Component {
  state = {
    user: {
      firstName: '',
      lastName: ''
    }
  }

  async getUserAuthenticated() {
    try {
      const user = await getUserAuthenticated()
      this.setState({ user })
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  componentDidMount() {
    this.getUserAuthenticated()
  }

  render() {
    const { user } = this.state
    const { classes, className } = this.props

    const rootClassName = classNames(classes.root, className)

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="/images/logos/brainalytica_logo.svg"
            />
          </Link>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account">
            <Avatar
              alt="Roman Kutepov"
              className={classes.avatar}
              src="/images/avatars/avatar.png"
            />
          </Link>
          <Typography className={classes.nameText} variant="h6">
            {user.firstName + ' ' + user.lastName}
          </Typography>
          <Typography className={classes.bioText} variant="caption">
            {user.email}
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary="Dashboard"/>
          </ListItem>
        </List>
      </nav>
    )
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar)
