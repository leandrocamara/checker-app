
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Button from 'components/CustomButtons'
import CustomInput from 'components/CustomInput'
import { GridItem, GridContainer } from 'components/Grid'

import workStyle from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx'

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} md={8} sm={12}>
            <h2 className={classes.title}>Fale conosco</h2>
            <h4 className={classes.description}>
              Em que podemos ajudar? Se você tem dúvidas, sugestões ou críticas
              referentes à marca ou aos nossos produtos, nos envie uma mensagem.
            </h4>
            <form>
              <GridContainer>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    id="name"
                    labelText="Nome"
                  />
                </GridItem>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    id="email"
                    labelText="E-mail"
                  />
                </GridItem>
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  id="message"
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                  labelText="Mensagem"
                />
                <GridContainer justify="center">
                  <GridItem
                    className={classes.textCenter}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <Button color="primary">Enviar Mensagem</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object
}

export default withStyles(workStyle)(WorkSection)
