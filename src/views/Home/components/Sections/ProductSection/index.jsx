/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import InfoArea from 'components/InfoArea';
import { GridItem, GridContainer } from 'components/Grid';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem md={8} sm={12} xs={12}>
            <h2 className={classes.title}>O verificador de e-mails #1</h2>
            <h5 className={classes.description}>
              Baseados nos últimos 100 milhões de e-mails verificamos que
              em 2018, 23,51% iriam apresentar falha de envio. Você usou algum serviço de limpeza
              de lista de contatos recentemente?
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem md={4} sm={12} xs={12}>
              <InfoArea
                description="Os E-mails validados pelo TheChecker trazem maior entregabilidade, convertem em mais vendas e aumentam o retorno do investimento das suas campanhas."
                icon={Chat}
                iconColor="info"
                title="Aumente o ROI das campanhas"
                vertical
              />
            </GridItem>
            <GridItem md={4} sm={12} xs={12}>
              <InfoArea
                description="1 a cada 5 e-mails não é entregue devido a problemas na reputação relacionados com IP e domínios. Proteja-se usando o melhor serviço de limpeza de lista de contatos."
                icon={VerifiedUser}
                iconColor="success"
                title="Proteja a Reputação do Remetente"
                vertical
              />
            </GridItem>
            <GridItem md={4} sm={12} xs={12}>
              <InfoArea
                description="Até mesmo uma pequena taxa de 5% de bounce pode te causar um bloqueio pelo ESP. Nosso serviço de limpeza de lista de contatos individual ou em massa te protege para aumentar a sua entregabilidade."
                icon={Fingerprint}
                iconColor="danger"
                title="Evite Bloqueios pelos ESP"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
