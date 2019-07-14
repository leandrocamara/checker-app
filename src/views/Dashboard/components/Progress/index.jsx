import React, { Component } from 'react'

// Externals
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Typography, LinearProgress } from '@material-ui/core'

// Material icons
import { InsertChartOutlined as InsertChartIcon } from '@material-ui/icons'

// Shared components
import { Paper } from 'components'

// Component styles
import styles from './styles'

// Shared services
import { getPercentValidsEmails } from 'services/email'

class Progress extends Component {
  state = {
    percent: 0
  }

  async getPercentValidsEmails() {
    try {
      const percent = await getPercentValidsEmails()
      this.setState({ percent })
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  componentDidMount() {
    this.getPercentValidsEmails()
  }

  render() {
    const { percent } = this.state
    const { classes, className, ...rest } = this.props

    const rootClassName = classNames(classes.root, className)

    return (
      <Paper {...rest} className={rootClassName}>
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography className={classes.title} variant="body2">
              VÁLIDOS
            </Typography>
            <Typography className={classes.value} variant="h3">
              {percent.toFixed(2)}%
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <InsertChartIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.footer}>
          <LinearProgress value={percent} variant="determinate"/>
        </div>
      </Paper>
    )
  }
}

Progress.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Progress)
