import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Externals
import _ from 'underscore'
import PropTypes from 'prop-types'
import validate from 'validate.js'
import compose from 'recompose/compose'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Button, Checkbox, CircularProgress, Grid, IconButton, TextField, Typography } from '@material-ui/core'

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

// Shared utilities
import validators from 'common/validators'

// Component styles
import styles from './styles'

// Form validation schema
import schema from './schema'

// Service methods
import { signUp } from 'services/user'

validate.validators.checked = validators.checked

class SignUp extends Component {
  state = {
    values: { firstName: '', lastName: '', email: '', password: '', policy: false },
    touched: { firstName: false, lastName: false, email: false, password: false, policy: null },
    errors: { firstName: null, lastName: null, email: null, password: null, policy: null },
    isValid: false,
    isLoading: false,
    submitError: null
  }

  /**
   * Redireciona para a página anterior (referente ao histórico).
   */
  handleBack = () => {
    const { history } = this.props
    history.push('/')
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
   * Envia os dados para cadastro do usuário.
   */
  handleSignUp = async () => {
    try {
      const { values } = this.state
      const { history } = this.props

      this.setState({ isLoading: true })

      await signUp(values).catch(error => {
        throw new Error(error.response.data.message)
      })

      history.push('/sign-in')
    } catch (error) {
      // console.log(error.message)
      this.setState({ isLoading: false, serviceError: error })
    }
  }

  render() {
    const { classes } = this.props
    const { values, touched, errors, isValid, submitError, isLoading } = this.state

    const showEmailError = touched.email && errors.email ? errors.email[0] : false
    const showPolicyError = touched.policy && errors.policy ? errors.policy[0] : false
    const showLastNameError = touched.lastName && errors.lastName ? errors.lastName[0] : false
    const showPasswordError = touched.password && errors.password ? errors.password[0] : false
    const showFirstNameError =  touched.firstName && errors.firstName ? errors.firstName[0] : false

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteWrapper} item lg={6}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h3">
                  "Ferramenta boa e prática. API fácil de usar, ótimo widget de formulário e a
                  interface simples tornam essa ferramenta um grande achado. E o preço é muito bom também!"
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Jon Mae
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Especialista em Marketing Digital na Inbox Hero
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={6} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton className={classes.backButton} onClick={this.handleBack}>
                  <ArrowBackIcon/>
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography variant="h2">
                    Criar uma conta
                  </Typography>
                  <Typography className={classes.subtitle} variant="body1">
                    Use seu e-mail para criar uma nova conta.
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Nome"
                      name="firstName"
                      onChange={event =>
                        this.handleFieldChange('firstName', event.target.value)
                      }
                      value={values.firstName}
                      variant="outlined"
                    />
                    {showFirstNameError && (
                      <Typography className={classes.fieldError} variant="body2">
                        {errors.firstName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Sobrenome"
                      onChange={event =>
                        this.handleFieldChange('lastName', event.target.value)
                      }
                      value={values.lastName}
                      variant="outlined"
                    />
                    {showLastNameError && (
                      <Typography className={classes.fieldError} variant="body2">
                        {errors.lastName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="E-mail"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      value={values.email}
                      variant="outlined"
                    />
                    {showEmailError && (
                      <Typography className={classes.fieldError} variant="body2">
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Senha"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography className={classes.fieldError} variant="body2">
                        {errors.password[0]}
                      </Typography>
                    )}
                    <div className={classes.policy}>
                      <Checkbox
                        checked={values.policy}
                        className={classes.policyCheckbox}
                        color="primary"
                        name="policy"
                        onChange={() =>
                          this.handleFieldChange('policy', !values.policy)
                        }
                      />
                      <Typography className={classes.policyText} variant="body1">
                        Li e concordo com os&nbsp;
                        <Link className={classes.policyUrl} to="#">
                          Termos e Condições
                        </Link>
                        .
                      </Typography>
                    </div>
                    {showPolicyError && (
                      <Typography className={classes.fieldError} variant="body2">
                        {errors.policy[0]}
                      </Typography>
                    )}
                  </div>
                  {submitError && (
                    <Typography className={classes.submitError} variant="body2">
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress}/>
                  ) : (
                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignUp}
                      size="large"
                      variant="contained"
                    >
                      Criar Nova Conta
                    </Button>
                  )}
                  <Typography className={classes.signIn} variant="body1">
                    Já possui uma conta?{' '}
                    <Link className={classes.signInUrl} to="/sign-in">
                      Entrar
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

SignUp.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default compose(withRouter, withStyles(styles))(SignUp)
