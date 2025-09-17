export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

// Choose one of these options:

// Option 1: Simple fix - use unknown instead of any
export interface StructuredDataProps {
  data: Record<string, unknown>;
}

// Option 2: Uncomment this if you want specific structured data types
// export interface StructuredDataProps {
//   data: 
//     | ArticleStructuredData
//     | PersonStructuredData
//     | OrganizationStructuredData
//     | ProductStructuredData
//     | Record<string, string | number | boolean | null>;
// }

// Option 3: Uncomment this if you want a generic approach
// export interface StructuredDataProps<T = Record<string, unknown>> {
//   data: T;
// }

// Supporting interfaces for Option 2
export interface ArticleStructuredData {
  '@type': 'Article';
  headline: string;
  author: string;
  datePublished: string;
  description?: string;
}

export interface PersonStructuredData {
  '@type': 'Person';
  name: string;
  jobTitle?: string;
  url?: string;
}

export interface OrganizationStructuredData {
  '@type': 'Organization';
  name: string;
  url?: string;
  logo?: string;
}

export interface ProductStructuredData {
  '@type': 'Product';
  name: string;
  description?: string;
  image?: string;
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
}