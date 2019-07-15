
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
        <h2 className={classes.title}>O que Dizem Nossos Clientes?</h2>
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
                  <small className={classes.smallTitle}>Diretora</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Nós migramos para o TheChecker em 2017. Precisávamos nos
                    certificar que as campanhas de marketing dos nossos clientes
                    atingiam as melhores taxas de entregabilidade. Depois de usar
                    vários serviços com resultados variáveis, descobrimos que o
                    TheChecker é o melhor. Rápido, preciso e fácil de usar.
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
                  <small className={classes.smallTitle}>CTO</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A melhor! É fácil de usar e os resultados são ótimos.
                    Tudo funciona perfeitamente. Nós conseguimos reduzir as
                    reclamações sobre e-mails de marketing e falsos registros.
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
                  <small className={classes.smallTitle}>Especialista em Marketing Digital</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Aqui na LeadLovers estamos sempre buscando ferramentas
                    inteligentes que ajudam a melhorar ainda mais nossa entregabilidade
                    de e-mails. Ao integrar o TheChecker ao nosso maior fluxo de aquisição,
                    conseguimos resultados incríveis na prevenção de problemas com nossa reputação.
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
