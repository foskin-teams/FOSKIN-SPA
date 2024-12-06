import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ metadata }) => {
  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
      <link rel="canonical" href={metadata.canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: metadata.title,
          description: metadata.description,
          url: metadata.canonicalUrl,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
