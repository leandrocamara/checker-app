import React, { Component } from 'react'

// Externals
import moment from 'moment'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, TableSortLabel } from '@material-ui/core'

// Shared services
import { getEmails } from 'services/email'

// Shared components
import { Portlet, PortletHeader, PortletLabel, PortletContent, Status } from 'components'

// Component styles
import styles from './styles'

const statusColors = { true: 'success', false: 'danger' }

class EmailsTable extends Component {
  signal = false

  state = {
    isLoading: false,
    emails: [],
  }

  async getEmails() {
    try {
      this.setState({ isLoading: true })

      const emails = await getEmails()

      if (this.signal) {
        this.setState({ isLoading: false, emails })
      }
    } catch (error) {
      if (this.signal) {
        this.setState({ isLoading: false, error })
      }
    }
  }

  componentDidMount() {
    this.signal = true
    this.getEmails()
  }

  componentWillUnmount() {
    this.signal = false
  }

  render() {
    const { isLoading, emails } = this.state
    const { classes, className } = this.props

    const rootClassName = classNames(classes.root, className)
    const showEmails = !isLoading && emails.length > 0

    return (
      <Portlet className={rootClassName}>
        <PortletHeader noDivider>
          <PortletLabel title="E-mails validados"/>
        </PortletHeader>
        <PerfectScrollbar>
          <PortletContent className={classes.portletContent} noPadding>
            {isLoading && (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            )}
            {showEmails && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sortDirection="desc">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel active direction="desc">
                          Data
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="left">Situação</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {emails.map(check => (
                    <TableRow className={classes.tableRow} hover key={check.id}>
                      <TableCell>
                        {moment(check.checkDate).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <div className={classes.statusWrapper}>
                          <Status className={classes.status} color={statusColors[check.valid]} size="sm"/>
                          {(check.valid) ? 'Válido' : 'Inválido' }
                        </div>
                      </TableCell>
                      <TableCell className={classes.customerCell}>
                        {check.email}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            <PortletHeader noDivider>
              <PortletLabel title={`${emails.length} no total`}/>
            </PortletHeader>
          </PortletContent>
        </PerfectScrollbar>
      </Portlet>
    )
  }
}

EmailsTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EmailsTable)
