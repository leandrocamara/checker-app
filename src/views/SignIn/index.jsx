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
import { Grid, Button, IconButton, CircularProgress, TextField, Typography } from '@material-ui/core'

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

// Component styles
import styles from './styles'

// Form validation schema
import schema from './schema'

// Service methods
import { signIn, removeToken } from 'services/auth'

class SignIn extends Component {
  state = {
    values: { email: '', password: '' },
    touched: { email: false, password: false },
    errors: { email: null, password: null },
    isValid: false,
    isLoading: false,
    submitError: null
  }

  componentDidMount = () => {
    removeToken()
  }

  /**
   * Redireciona para a página anterior (referente ao histórico).
   */
  handleBack = () => {
    const { history } = this.props
    history.goBack()
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
  handleSignIn = async () => {
    try {
      const { values } = this.state
      const { history } = this.props

      this.setState({ isLoading: true })

      await signIn(values).catch(error => {
        throw new Error(error.response.data.message)
      })

      history.push('/dashboard')
    } catch (error) {
      // console.log(error.message)
      this.setState({ isLoading: false, serviceError: error })
    }
  }

  render() {
    const { classes } = this.props
    const { values, touched, errors, isValid, submitError, isLoading } = this.state

    const showEmailError = touched.email && errors.email
    const showPasswordError = touched.password && errors.password

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container >
          <Grid className={classes.quoteWrapper} item lg={6}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h3">
                  "A melhor! É fácil de usar e os resultados são ótimos. Tudo funciona perfeitamente.
                  Nós conseguimos reduzir as reclamações sobre e-mails de marketing e falsos registros."
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Julián Pérez
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Diretor na EIVOS
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={6} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton className={classes.backButton} onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography variant="h2">
                    Entrar
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="E-mail"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      type="text"
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
                      name="password"
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
                  </div>
                  {submitError && (
                    <Typography className={classes.submitError} variant="body2">
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      Entrar
                    </Button>
                  )}
                  <Typography className={classes.signUp} variant="body1">
                    Não tem uma conta?{' '}
                    <Link className={classes.signUpUrl} to="/sign-up">
                      Cadastre-se
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

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default compose(withRouter, withStyles(styles))(SignIn)
