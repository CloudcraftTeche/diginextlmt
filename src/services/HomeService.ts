// src/services/HomeService.ts

import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { mockHomeBanners } from "@/mocks/home/homeBanners.mock";
import { mockHomeAbout } from "@/mocks/home/homeAbout.mock";
import { mockHomeVision } from "@/mocks/home/homeVision.mock";
import { mockHomeFaq } from "@/mocks/home/homeFaq.mock";
import { mockHomeSeo } from "@/mocks/home/homeSeo.mock";
import { mockHomeFeatures } from "@/mocks/home/features.mock";
import axios from "axios";

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const HomeService = {
  getHomeBanners: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockHomeBanners, 800);
    }

    try {
      return await apiClient.get(ApiConstants.home_banner);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }
      console.warn("Home banners API failed, using fallback data:", error);
      return useMockData(mockHomeBanners);
    }
  },

  getAbout: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockHomeAbout, 600);
    }

    try {
      return await apiClient.get(ApiConstants.home_about);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("About API failed, using fallback data:", error);
      return useMockData(mockHomeAbout);
    }
  },

  getVision: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockHomeVision, 600);
    }

    try {
      return await apiClient.get(ApiConstants.home_vision);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("Vision API failed, using fallback data:", error);
      return useMockData(mockHomeVision);
    }
  },

  getFaq: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockHomeFaq, 600);
    }

    try {
      return await apiClient.get(ApiConstants.home_faq);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("FAQ API failed, using fallback data:", error);
      return useMockData(mockHomeFaq);
    }
  },

  getHomeSeo: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockHomeSeo, 600);
    }

    try {
      return await apiClient.get(ApiConstants.home_seo);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("SEO API failed, using fallback data:", error);
      return useMockData(mockHomeSeo);
    }
  },

  getFeatures: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockHomeFeatures, 600);
    }

    try {
      return await apiClient.get(ApiConstants.home_features);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("Features API failed, using fallback data:", error);
      return useMockData(mockHomeFeatures);
    }
  },
};
