import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Externals
import PropTypes from 'prop-types'
import classNames from 'classnames'
import compose from 'recompose/compose'

// Material helpers
import { withStyles } from '@material-ui/core'

// Custom components
import Header from 'components/Header'
import Footer from 'components/Footer'
import Parallax from 'components/Parallax'
import Button from 'components/CustomButtons'
import HeaderLinks from 'components/Header/HeaderLinks'
import { GridItem, GridContainer } from 'components/Grid'

import styles from 'assets/jss/material-kit-react/views/landingPage.jsx'

// Sections for this page
import { TeamSection, WorkSection, ProductSection } from './components/Sections'

// Images
// import background from '/images/landing-bg.jpg'

const dashboardRoutes = [];

class Home extends Component {
  handleSignUp = () => {
    const { history } = this.props
    history.push('/sign-up')
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="TheChecker"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          color="transparent"
          fixed
          rightLinks={<HeaderLinks />}
          routes={dashboardRoutes}
          {...rest}
        />
        <Parallax filter image="/images/landing-bg.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem  md={6} sm={12} xs={12}>
                <h2 className={classes.title}>
                  O serviço de verificação de<br/>e-mail com o melhor<br/>custo-benefício.
                </h2>
                <h4>
                  Livre-se dos problemas de entrega e de endereços de e-mail
                  ruins com o nosso serviço de alta qualidade e de ótimo preço.
                  Verificação e validação de e-mails que melhoram a qualidade dos
                  seus dados e o ROI de suas campanhas.
                </h4>
                <br />
                <Button
                  color="danger"
                  onClick={this.handleSignUp}
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  <i className="fas fa-play" />
                  Experimente
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default compose(withRouter, withStyles(styles))(Home)
