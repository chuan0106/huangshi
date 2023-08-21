import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import DocumentTitle from 'react-document-title';
function HelmetTitle({ title, logo, children }) {
  console.log('alsdjcsaldknvsf', title, children);
  return (
    <DocumentTitle title={title}>
      <Fragment>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href={logo} type="image/x-icon" />
        </Helmet>
        {children && children}
      </Fragment>
    </DocumentTitle>
  );
}
export default HelmetTitle;
