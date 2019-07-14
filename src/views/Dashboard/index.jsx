import React, { Component } from 'react'

// Externals
import PropTypes from 'prop-types'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Grid } from '@material-ui/core'

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts'

// Custom components
import { CheckEmail, Emails, EmailsTable, Progress } from './components'

// Component styles
const styles = theme => ({
  root: { padding: theme.spacing.unit * 4 },
  item: { height: '100%' }
})

class Dashboard extends Component {
  render() {
    const { classes } = this.props

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <CheckEmail />
              <Grid container spacing={2} >
                <Grid item lg={6} sm={6} xl={6} xs={12}>
                  <Emails className={classes.item} />
                </Grid>
                <Grid item lg={6} sm={6} xl={6} xs={12}>
                  <Progress className={classes.item} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <EmailsTable className={classes.item} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
