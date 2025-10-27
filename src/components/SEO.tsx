import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}
export function SEO({
  title = 'Talent Barbershop | Kids Haircuts & Special Needs-Friendly Barbers in Everett, MA',
  description = 'Talent Barbershop specializes in kids’ haircuts — including children with autism and special needs — in a calm, welcoming environment. Our experienced barbers make every visit stress-free and fun with patience, care, and kid-friendly chairs. Book your appointment today in Everett, MA.',
  canonicalUrl = 'https://talentbarbershop2019.com',
  ogImage = "/fade.jpg"
}: SEOProps) {
  return <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="barbershop, haircut, Everett, MA, beard trim, hot towel shave, men's grooming, fade, classic cut, kids haircut, family barbershop, barber, Massachusetts" />
      <meta name="author" content="Talent Barbershop" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicon */}
      <link rel="icon" href="/0_0.png" type="image/png" />
      <link rel="apple-touch-icon" href="/0_0.png" />
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Talent Barbershop" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BarberShop",
            "name": "Talent Barbershop",
            "image": "${ogImage}",
            "url": "${canonicalUrl}",
            "telephone": "(857) 237-2107",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6 Chelsea St",
              "addressLocality": "Everett",
              "addressRegion": "MA",
              "postalCode": "02149",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.4048,
              "longitude": -71.0534
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday", "Saturday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "priceRange": "$$",
            "description": "Talent Barbershop offers professional haircuts, hot towel shaves, and beard trims in Everett, MA. Kid-friendly barbershop with special chairs for children.",
            "sameAs": [
              "https://www.facebook.com/talentbarbershop",
              "https://www.instagram.com/talentbarbershop"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Barbershop Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Haircuts",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Classic Haircut",
                        "description": "Traditional haircut with clippers and scissors, includes a hot towel and neck shave."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Kid's Haircut",
                        "description": "Haircut for children under 12 years old, includes a lollipop."
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Shaves & Beard",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hot Towel Shave",
                        "description": "Traditional straight razor shave with hot towels and premium shaving products."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Beard Trim",
                        "description": "Precise beard shaping and trimming to keep your facial hair looking its best."
                      }
                    }
                  ]
                }
              ]
            }
          }
        `}
      </script>
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "${canonicalUrl}"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "${canonicalUrl}#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Gallery",
                "item": "${canonicalUrl}#gallery"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "${canonicalUrl}#contact"
              }
            ]
          }
        `}
      </script>
    </Helmet>;
}
