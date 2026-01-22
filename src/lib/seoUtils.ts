export interface SeoData {
    id?: number;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    banner_image?: string;
}
  
/**
 * Updates the document title and meta tags (description, keywords) based on the provided SEO data.
 * safe to call on the client side.
 */
export const updateSeoMetadata = (seoData: SeoData | null | undefined, defaultTitle = "Diginext") => {
    if (!seoData) return;

    // Update Title
    document.title = seoData.meta_title || defaultTitle;

    // Helper to set meta tag
    const setMeta = (name: string, content: string) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute("name", name);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    };

    if (seoData.meta_description) setMeta("description", seoData.meta_description);
    if (seoData.meta_keywords) setMeta("keywords", seoData.meta_keywords);
};
