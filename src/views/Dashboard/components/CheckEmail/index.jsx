import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Externals
import _ from 'underscore'
import PropTypes from 'prop-types'
import validate from 'validate.js'
import classNames from 'classnames'
import compose from 'recompose/compose'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Button, TextField, CircularProgress, Typography } from '@material-ui/core'

// Shared components
import { Portlet, PortletHeader, PortletLabel, PortletContent, PortletFooter } from 'components'

// Component styles
import styles from './styles'

// Form validation schema
import schema from './schema'

// Service methods
import { checkEmail } from 'services/email'

class CheckEmail extends Component {
  state = {
    values: { email: '' },
    touched: { email: false },
    errors: { email: null },
    isValid: false,
    isLoading: false,
    submitError: null
  }

  /**
   * Valida o formulário.
   */
  validateForm = _.debounce(() => {
    const { values } = this.state
    const newState = { ...this.state }
    const errors = validate(values, schema, { fullMessages: false })

    newState.errors = errors || {}
    newState.isValid = errors ? false : true

    this.setState(newState)
  }, 300)

  /**
   * Atualiza o estado do campo alterado.
   *
   * @param field string
   * @param value any
   */
  handleFieldChange = (field, value) => {
    const newState = { ...this.state }

    newState.submitError = null
    newState.touched[field] = true
    newState.values[field] = value

    this.setState(newState, this.validateForm)
  }

  /**
   * Envia os dados para autenticação do usuário.
   */
  handleCheck = async () => {
    try {
      const { values } = this.state
      const { history } = this.props

      this.setState({ isLoading: true })

      const check = await checkEmail(values.email).catch(error => {
        throw new Error(error.response.data.message)
      })

      console.log(check.message)
      setTimeout(() => {
        history.go(0)
      }, 1000);
    } catch (error) {
      // console.log(error.message)
      this.setState({ isLoading: false, serviceError: error })
    }
  }

  render() {
    const { values, touched, errors, isValid, submitError, isLoading } = this.state
    const { classes, className, ...rest } = this.props
    const showEmailError = touched.email && errors.email
    const rootClassName = classNames(classes.root, className)

    return (
      <Portlet {...rest} className={rootClassName}>
        <PortletHeader>
          <PortletLabel subtitle="Informe o e-mail a ser validado" title="Verificação"/>
        </PortletHeader>
        <PortletContent noPadding>
          <form autoComplete="off" noValidate>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="E-mail"
                margin="dense"
                name="email"
                onChange={event =>
                  this.handleFieldChange('email', event.target.value)
                }
                required
                type="text"
                value={values.email}
                variant="outlined"
              />
              {showEmailError && (
                <Typography className={classes.fieldError} variant="body2">
                  {errors.email[0]}
                </Typography>
              )}
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          {submitError && (
            <Typography className={classes.submitError} variant="body2">
              {submitError}
            </Typography>
          )}
          {isLoading ? (
            <CircularProgress className={classes.progress} />
          ) : (
            <Button
              color="primary"
              disabled={!isValid}
              onClick={this.handleCheck}
              variant="contained"
            >
              Verificar
            </Button>
          )}
        </PortletFooter>
      </Portlet>
    )
  }
}

CheckEmail.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default compose(withRouter, withStyles(styles))(CheckEmail)
