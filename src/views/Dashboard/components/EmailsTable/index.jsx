import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';

// Shared services
import { getEmails } from 'services/email';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  Status
} from 'components';

// Component styles
import styles from './styles';

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refund: 'danger'
};

class EmailsTable extends Component {
  signal = false;

  state = {
    isLoading: false,
    emails: [],
    emailsTotal: 0
  };

  async getEmails() {
    try {
      this.setState({ isLoading: true });

      const emails = await getEmails();

      if (this.signal) {
        this.setState({
          isLoading: false,
          emails
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getEmails();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  render() {
    const { classes, className } = this.props;
    const { isLoading, emails, emailsTotal } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showEmails = !isLoading && emails.length > 0;

    return (
      <Portlet className={rootClassName}>
        <PortletHeader noDivider>
          <PortletLabel
            subtitle={`${emailsTotal} no total`}
            title="E-mails validados"
          />
        </PortletHeader>
        <PerfectScrollbar>
          <PortletContent
            className={classes.portletContent}
            noPadding
          >
            {isLoading && (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            )}
            {showEmails && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      sortDirection="desc"
                    >
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableSortLabel
                          active
                          direction="desc"
                        >
                          Data
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="left">Situação</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {emails.map(email => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={email.id}
                    >
                      <TableCell>
                        {moment(email.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <div className={classes.statusWrapper}>
                          <Status
                            className={classes.status}
                            color={statusColors[email.situacao]}
                            size="sm"
                          />
                          {email.situacao}
                        </div>
                      </TableCell>
                      <TableCell className={classes.customerCell}>
                        {email.descricao}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </PortletContent>
        </PerfectScrollbar>
      </Portlet>
    );
  }
}

EmailsTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmailsTable);
