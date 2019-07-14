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
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit React"
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
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  <i className="fas fa-play" />
                  Watch video
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
