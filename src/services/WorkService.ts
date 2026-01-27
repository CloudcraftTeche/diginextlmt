import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import axios from "axios";
import { mockServicesList } from "@/mocks/services/servicesList.mock";

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const WorkService = {
  getWorks: async (params?: { expertise?: number; industry?: number }) => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockServicesList);
    }
    try {
      return await apiClient.get(ApiConstants.our_works, { params });
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Services List API failed, using fallback:", error);
      return useMockData(mockServicesList);
    }
  },

  getSeo: async () => {
    if (IS_MOCK_ENABLED) {
      // Return a basic mock structure if needed, or re-use existing mock mechanism
      return useMockData({});
    }
    try {
      return await apiClient.get(ApiConstants.our_works_seo);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Works SEO API failed, using fallback:", error);
      return useMockData({});
    }
  },

  getExpertise: async () => {
    if (IS_MOCK_ENABLED) return useMockData([]);
    try {
      return await apiClient.get(ApiConstants.our_works_expertise);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Expertise API failed:", error);
      return useMockData([]);
    }
  },

  getIndustries: async () => {
    if (IS_MOCK_ENABLED) return useMockData([]);
    try {
      return await apiClient.get(ApiConstants.our_works_industries);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Industries API failed:", error);
      return useMockData([]);
    }
  },

  getWorkDetail: async (id: number | string) => {
    if (IS_MOCK_ENABLED) return useMockData(null);
    try {
      // @ts-ignore - API constants type mismatch for id if strictly typed
      return await apiClient.get(ApiConstants.our_works_detail(Number(id)));
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Work Detail API failed for ID ${id}:`, error);
      return useMockData(null);
    }
  },
};
