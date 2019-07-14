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

// core components
import Button from 'components/CustomButtons';
import CustomInput from 'components/CustomInput';
import { GridItem, GridContainer } from 'components/Grid';

import workStyle from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx';

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} md={8} sm={12}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <GridContainer>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    id="name"
                    labelText="Your Name"
                  />
                </GridItem>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true
                    }}
                    id="email"
                    labelText="Your Email"
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
                  labelText="Your Message"
                />
                <GridContainer justify="center">
                  <GridItem
                    className={classes.textCenter}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(WorkSection);
