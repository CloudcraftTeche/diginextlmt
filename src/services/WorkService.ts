import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { mockWorkList } from "@/mocks/works/workList.mock";
import {
  mockIndustryList,
  mockExpertiseList,
} from "@/mocks/works/filters.mock";
import axios from "axios";

export const WorkService = {
  getWorks: async (filter?: { expertise?: number; industry?: number }) => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockWorkList);
    }
    try {
      return await apiClient.get(ApiConstants.our_works, { params: filter });
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Work List API failed:", error);

      // Fallback to mock if API fails
      return useMockData(mockWorkList);
    }
  },

  getWorkDetail: async (id: number | string) => {
    if (IS_MOCK_ENABLED) {
      const workItem = mockWorkList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Work detail retrieved successfully",
        data: workItem || null,
      });
    }
    try {
      // @ts-ignore - API constants type mismatch for id if strictly typed
      return await apiClient.get(ApiConstants.our_works_detail(id));
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Work Detail API failed for ID ${id}:`, error);

      // Fallback to mock if API fails
      const workItem = mockWorkList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Work detail retrieved successfully",
        data: workItem || null,
      });
    }
  },

  getIndustries: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData({
        success: true,
        message: "Industry list retrieved successfully",
        data: mockIndustryList,
      });
    }
    try {
      return await apiClient.get(ApiConstants.our_works_expertise);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Industry List API failed:", error);
      return useMockData({
        success: true,
        message: "Industry list retrieved successfully",
        data: mockIndustryList,
      });
    }
  },

  getExpertise: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData({
        success: true,
        message: "Expertise list retrieved successfully",
        data: mockExpertiseList,
      });
    }
    try {
      return await apiClient.get(ApiConstants.our_works_expertise);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Expertise List API failed:", error);
      return useMockData({
        success: true,
        message: "Expertise list retrieved successfully",
        data: mockExpertiseList,
      });
    }
  },

  getSeo: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData({
        success: true,
        message: "Work SEO retrieved successfully",
        data: null,
      });
    }
    try {
      return await apiClient.get(ApiConstants.our_works_seo);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      // SEO endpoint might be missing for some items, using mock fallback silently
      const is404 = axios.isAxiosError(error) && error.response?.status === 404;
      if (!is404) {
        console.warn("Work SEO API failed:", error);
      } else {
        console.log("Work SEO not found (404), using fallback.");
      }
      return useMockData({
        success: true,
        message: "Work SEO retrieved successfully",
        data: null,
      });
    }
  },

  getDesigns: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData({
        success: true,
        message: "Designs retrieved successfully",
        data: [],
      });
    }
    try {
      return await apiClient.get(ApiConstants.design);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Design List API failed:", error);
      return useMockData({
        success: true,
        message: "Designs retrieved successfully",
        data: [],
      });
    }
  },

  getDesignDetail: async (slug: string) => {
    if (IS_MOCK_ENABLED) {
      return useMockData({
        success: true,
        message: "Design detail retrieved successfully ",
        data: null,
      });
    }
    try {
      return await apiClient.get(ApiConstants.design_detail(slug));
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Design Detail API failed for slug ${slug}:`, error);
      return useMockData({
        success: true,
        message: "Design detail retrieved successfully",
        data: null,
      });
    }
  },
};

function useMockData<T>(data: T) {
  return Promise.resolve({
    data: data,
    status: 200,
    statusText: "OK",
    headers: {},
    config: {} as any,
  });
}
