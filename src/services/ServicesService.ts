import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { mockServicesBanner } from "@/mocks/services/servicesBanner.mock";
import { mockServicesList } from "@/mocks/services/servicesList.mock";
import { mockServicesSeo } from "@/mocks/services/servicesSeo.mock";
import { mockSubServiceDetail } from "@/mocks/services/subServiceDetail.mock";
import axios from "axios";

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
};
