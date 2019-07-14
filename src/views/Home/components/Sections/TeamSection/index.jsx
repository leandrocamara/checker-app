
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import Card from 'components/Card/Card.jsx'
import Button from 'components/CustomButtons'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import { GridItem, GridContainer } from 'components/Grid'

import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx'

// import team1 from '/images/faces/avatar.jpg'
// import team3 from '/images/faces/kendall.jpg'
// import team2 from '/images/faces/christian.jpg'

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem md={4} sm={12} xs={12}>
              <Card plain>
                <GridItem className={classes.itemGrid} md={6} sm={12} xs={12}>
                  <img alt="..." className={imageClasses} src="/images/faces/avatar.jpg" />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Gigi Hadid
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-instagram'} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-facebook'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={12} xs={12}>
              <Card plain>
                <GridItem className={classes.itemGrid} md={6} sm={12} xs={12}>
                  <img alt="..." className={imageClasses} src="/images/faces/christian.jpg" />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Christian Louboutin
                  <br />
                  <small className={classes.smallTitle}>Designer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-linkedin'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem md={4} sm={12} xs={12}>
              <Card plain>
                <GridItem className={classes.itemGrid} md={6} sm={12} xs={12}>
                  <img alt="..." className={imageClasses} src="/images/faces/kendall.jpg" />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Kendall Jenner
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-instagram'} />
                  </Button>
                  <Button
                    className={classes.margin5}
                    color="transparent"
                    justIcon
                  >
                    <i className={classes.socials + ' fab fa-facebook'} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
