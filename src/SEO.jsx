import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ metadata }) => {
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={metadata.canonicalUrl} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="FOSKIN" />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
    </Helmet>
  );
};

export default SEO;
