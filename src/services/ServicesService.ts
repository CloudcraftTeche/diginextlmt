import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { mockServicesBanner } from "@/mocks/services/servicesBanner.mock";
import { mockServicesList } from "@/mocks/services/servicesList.mock";
import { mockServicesSeo } from "@/mocks/services/servicesSeo.mock";
import { mockSubServiceDetail } from "@/mocks/services/subServiceDetail.mock";
import { mockSolutionDetail } from "@/mocks/services/solutions.mock";
import { mockSolutionsList } from "@/mocks/services/solutionsList.mock";
import axios from "axios";

// Types for the new Solutions API structure
export interface SubSolution {
  id: number;
  solutions_name: string;
  solutions_title: string;
  solutions_description: string;
  solutions_image: string;
  solutions_heading: number;
  slug?: string; // Optional slug for frontend routing if needed
}

export interface SolutionCategory {
  id: number;
  solutions: SubSolution[];
  solutions_name: string;
  solutions_description: string;
  solutions_image: string;
}

export interface SolutionsResponse {
  success: boolean;
  message: string;
  data: SolutionCategory[];
}

export interface SolutionSeoResponse {
  success: boolean;
  message: string;
  data: {
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    banner_image: string | null;
    is_active: boolean;
  };
}

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const ServicesService = {
  getBanner: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockServicesBanner);
    }
    try {
      return await apiClient.get(ApiConstants.services_banner);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Services Banner API failed, using fallback:", error);
      return useMockData(mockServicesBanner);
    }
  },

  getServices: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockServicesList);
    }
    try {
      return await apiClient.get(ApiConstants.services_list);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Services List API failed, using fallback:", error);
      return useMockData(mockServicesList);
    }
  },

  getSeo: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockServicesSeo);
    }
    try {
      return await apiClient.get(ApiConstants.services_seo);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Services SEO API failed, using fallback:", error);
      return useMockData(mockServicesSeo);
    }
  },

  getSubService: async (id: number) => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockSubServiceDetail);
    }
    try {
      return await apiClient.get(`${ApiConstants.subservice_detail}${id}/`);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Subservice ${id} API failed, using fallback:`, error);
      return useMockData(mockSubServiceDetail);
    }
  },

  getSolutionDetail: async (id: number) => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockSolutionDetail);
    }
    try {
      return await apiClient.get(ApiConstants.subsolution_detail(id));
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Solution ${id} API failed, using fallback:`, error);
      return useMockData(mockSolutionDetail);
    }
  },

  getSolutions: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockSolutionsList);
    }
    try {
      // Prioritize the new endpoint if available
      return await apiClient.get<SolutionsResponse>(
        ApiConstants.solutions_names,
      );
    } catch (error) {
      // Fallback to old behavior or mock if new one fails
      if (axios.isCancel(error)) throw error;
      try {
        // Try old list endpoint as fallback? Or just mock.
        return await apiClient.get(ApiConstants.solutions_list);
      } catch (err) {
        console.warn("Solutions List API failed, using fallback:", error);
        return useMockData(mockSolutionsList);
      }
    }
  },

  getSolutionsSeo: async () => {
    try {
      return await apiClient.get<SolutionSeoResponse>(
        ApiConstants.solutions_digital_market,
      );
    } catch (error) {
      console.warn("Solutions SEO API failed", error);
      // Return a basic fallback if valid mock isn't available
      return Promise.resolve({
        data: {
          success: false,
          data: {
            meta_title: "",
            meta_description: "",
            meta_keywords: "",
            banner_image: null,
            is_active: false,
          },
        },
      });
    }
  },
};
