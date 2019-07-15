/*eslint-disable*/
import React from 'react'
import compose from 'recompose/compose'
import { withRouter } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import { Input } from '@material-ui/icons'

// core components
import Button from 'components/CustomButtons'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
  const handleBack = () => {
    const { history } = props
    history.push('/sign-in')
  }

  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={handleBack}
        >
          <Input className={classes.icons} /> Entrar
        </Button>
      </ListItem>
    </List>
  );
}

export default compose(withRouter, withStyles(headerLinksStyle))(HeaderLinks)
// export default withStyles(headerLinksStyle)(HeaderLinks);
