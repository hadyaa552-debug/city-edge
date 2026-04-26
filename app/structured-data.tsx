export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://tatweermisr-hossam.vercel.app/#organization",
        name: "تطوير مصر للتطوير العقاري",
        alternateName: "Tatweer Misr",
        url: "https://tatweermisr-hossam.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://tatweermisr-hossam.vercel.app/logo.svg",
        },
        sameAs: [
          "https://www.facebook.com/TatweerMisr",
          "https://www.instagram.com/tatweermisr",
          "https://twitter.com/TatweerMisr",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+20-10-XXXXXXXX",
          contactType: "Customer Service",
          areaServed: "EG",
          availableLanguage: ["Arabic", "English"],
        },
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://tatweermisr-hossam.vercel.app/#ilmontegalala",
        name: "المونت جلالة - IL Monte Galala",
        alternateName: "IL Monte Galala Sokhna",
        description:
          "أول مشروع من نوعه في مصر: 10 أبراج سكنية فندقية فاخرة على البحر الأحمر مباشرة بارتفاع 22 دور في جبل الجلالة، العين السخنة. تحت إدارة Marriott International مع مارينا عالمية IGY Marinas، ممشى سياحي 1 كم، ومركز معارض ومؤتمرات دولي. وحدات متنوعة بتشطيب كامل: ستوديو (60م²)، 1-3 غرف نوم (90-230م²)، لوفت (105-145م²)، بنتهاوس (415-450م²). نظام سداد مرن: 5% مقدم و10 سنوات تقسيط. الأسعار تبدأ من 10,000,000 جنيه مصري.",
        url: "https://tatweermisr-hossam.vercel.app",
        image: [
          "https://tatweermisr-hossam.vercel.app/images/ilmonte/gallery-main.webp",
          "https://tatweermisr-hossam.vercel.app/images/ilmonte/aerial-sunset.webp",
          "https://tatweermisr-hossam.vercel.app/images/ilmonte/villa-1.webp",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "جبل الجلالة",
          addressLocality: "العين السخنة",
          addressRegion: "البحر الأحمر",
          addressCountry: "EG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 29.6795,
          longitude: 32.4269,
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "إطلالة بحرية مباشرة",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "مارينا عالمية",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "حمامات سباحة infinity",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "إدارة Marriott",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "ممشى سياحي 1 كم",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "مركز معارض ومؤتمرات",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "أمن 24/7",
            value: true,
          },
        ],
        developer: {
          "@id": "https://tatweermisr-hossam.vercel.app/#organization",
        },
      },
      {
        "@type": "Product",
        "@id": "https://tatweermisr-hossam.vercel.app/#apartments",
        name: "وحدات سكنية فندقية - IL Monte Galala",
        description: "وحدات سكنية فندقية فاخرة في IL Monte Galala من 60 إلى 450 متر مربع",
        category: "Real Estate",
        brand: {
          "@type": "Brand",
          name: "تطوير مصر",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EGP",
          lowPrice: "10000000",
          highPrice: "45000000",
          offerCount: "100",
          availability: "https://schema.org/PreOrder",
          priceValidUntil: "2028-12-31",
          itemCondition: "https://schema.org/NewCondition",
        },
        isRelatedTo: {
          "@id": "https://tatweermisr-hossam.vercel.app/#ilmontegalala",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://tatweermisr-hossam.vercel.app/#website",
        url: "https://tatweermisr-hossam.vercel.app",
        name: "IL Monte Galala - تطوير مصر",
        description: "الموقع الرسمي لمشروع IL Monte Galala من تطوير مصر",
        publisher: {
          "@id": "https://tatweermisr-hossam.vercel.app/#organization",
        },
        inLanguage: "ar",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://tatweermisr-hossam.vercel.app/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://tatweermisr-hossam.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IL Monte Galala",
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
