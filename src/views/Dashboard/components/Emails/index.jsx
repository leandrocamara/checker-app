import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
  PeopleOutlined as PeopleIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

// Shared services
import { getTotalChecks } from 'services/email'

class Emails extends Component {
  state = {
    total: 0
  }

  async getTotalChecks() {
    try {
      const total = await getTotalChecks()
      this.setState({ total })
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  componentDidMount() {
    this.getTotalChecks()
  }

  render() {
    const { total } = this.state
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="body2"
            >
              TOTAL EMAILS
            </Typography>
            <Typography
              className={classes.value}
              variant="h3"
            >
              {total}
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <PeopleIcon className={classes.icon} />
          </div>
        </div>
      </Paper>
    );
  }
}

Emails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Emails);
