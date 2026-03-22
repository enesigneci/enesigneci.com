import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = "Enes İğneci | Android Developer & Technical Writer",
  description = "Personal portfolio of Enes İğneci, an experienced Android Developer with 10 years of experience. Insights on Kotlin, Jetpack Compose, and modern Android development.",
  keywords = ["Android", "Kotlin", "Jetpack Compose", "Mobile Development", "Technical Writing", "Enes İğneci"],
  image = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzc0MjE1NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  url = "https://enesigneci.com",
  type = "website"
}: SEOProps) {
  const siteTitle = title.includes("Enes İğneci") ? title : `${title} | Enes İğneci`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
