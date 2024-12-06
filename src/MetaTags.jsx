// src/components/MetaTags.js
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTags;