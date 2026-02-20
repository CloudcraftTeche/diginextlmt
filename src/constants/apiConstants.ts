import { API } from "@/config/apiConfig";

export const ApiConstants = {
  contact_leads_create: `${API}/contact/leads/`,
  api_subscribe_create: "/api/subscribe/",
  trust_section: "/api/home/text1/",
  services: "/api/services/service-names/",

  //new
  home_banner: `${API}/home/banners/`,
  home_about: `${API}/home/about-us/`,
  home_vision: `${API}/home/visions/`,
  home_faq: `${API}/home/faq/`,
  home_seo: `${API}/home/digital-marketing/`,
  home_features: `${API}/home/features/`,

  // About Us
  about_banners: `${API}/aboutus/banners/`,
  about_text1: `${API}/aboutus/text1/`,
  about_text2: `${API}/aboutus/text2/`,
  about_missions: `${API}/aboutus/missions/`,
  about_seo: `${API}/aboutus/digital-marketing/`,

  // Services
  services_banner: `${API}/services/`,
  services_list: `${API}/services/service-names/`,
  services_seo: `${API}/services/serviceDigitalMarket`,
  subservice_detail: `${API}/services/subservice/`,
  solutions_list: `${API}/solutions/list/`, // Assuming this endpoint for completeness, though we rely on mock/lookup for now
  subsolution_detail: (id: number | string) =>
    `${API}/solutions/subsolutions/${id}/`,

  // New Solutions Endpoints
  solutions_names: `${API}/solutions/solutions-names/`,
  solutions_digital_market: `${API}/solutions/solutioinDigitalMarket`, // Typo in endpoint as provided by user
  solutions: `${API}/solutions/`,

  // layout
  footer: `${API}/footer/`,
  navbar_data: `${API}/navbar-data/`,

  // Insights
  insights_banner: `${API}/insights/banner`,
  insights_list: `${API}/insights/our-insights/`,
  insight_detail: `${API}/insights/our-insights/`,

  // Career
  career: `${API}/career/`,

  // Blog
  blog_posts: `${API}/blog/`,
  blog_post_detail: (id: number | string) => `${API}/blog/${id}/`,

  // Work
  our_works: `${API}/ourworks/`,
  our_works_seo: `${API}/ourworks/digital-marketing/`,
  our_works_expertise: `${API}/ourworks/expertise/`,
  our_works_industries: `${API}/ourworks/industries/`,
  our_works_detail: (id: number | string) => `${API}/ourworks/${id}/`,

  // Design
  design: `${API}/design/`,
  design_detail: (slug: string) => `${API}/design/${slug}/`,

  //Location
  locations: `${API}/locations/`,
  location_detail: (id: number | string) => `${API}/locations/${id}/`,
};
