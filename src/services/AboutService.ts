// src/services/AboutService.ts

import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { mockAboutBanners } from "@/mocks/about/aboutBanners.mock";
import { mockAboutText1 } from "@/mocks/about/aboutText1.mock";
import { mockAboutText2 } from "@/mocks/about/aboutText2.mock";
import { mockAboutMissions } from "@/mocks/about/aboutMissions.mock";
import { mockAboutSeo } from "@/mocks/about/aboutSeo.mock";
import axios from "axios";

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const AboutService = {
  getBanners: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockAboutBanners, 800);
    }

    try {
      return await apiClient.get(ApiConstants.about_banners);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }
      console.warn("About banners API failed, using fallback data:", error);
      return useMockData(mockAboutBanners);
    }
  },

  getText1: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockAboutText1, 600);
    }

    try {
      return await apiClient.get(ApiConstants.about_text1);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("About Text 1 API failed, using fallback data:", error);
      return useMockData(mockAboutText1);
    }
  },

  getText2: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockAboutText2, 600);
    }

    try {
      return await apiClient.get(ApiConstants.about_text2);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("About Text 2 API failed, using fallback data:", error);
      return useMockData(mockAboutText2);
    }
  },

  getMissions: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockAboutMissions, 600);
    }

    try {
      return await apiClient.get(ApiConstants.about_missions);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("About Missions API failed, using fallback data:", error);
      return useMockData(mockAboutMissions);
    }
  },
  getAboutSeo: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockAboutSeo, 600);
    }

    try {
      return await apiClient.get(ApiConstants.about_seo);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }

      console.warn("About SEO API failed, using fallback data:", error);
      return useMockData(mockAboutSeo);
    }
  },
};
