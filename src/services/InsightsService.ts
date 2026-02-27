import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { ENABLE_FEATURES, IS_MOCK_ENABLED } from "@/config/apiConfig";
import { mockInsightsBanner } from "@/mocks/insights/insightsBanner.mock";
import { mockInsightsList } from "@/mocks/insights/insightsList.mock";
import axios from "axios";

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const InsightsService = {
  getBanner: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockInsightsBanner);
    }
    try {
      return await apiClient.get(ApiConstants.insights_banner);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Insights Banner API failed, using fallback:", error);
      return useMockData(mockInsightsBanner);
    }
  },

  getInsights: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockInsightsList);
    }
    try {
      return await apiClient.get(ApiConstants.insights_list);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Insights List API failed, using fallback:", error);
      return useMockData(mockInsightsList);
    }
  },

  getInsightById: async (idOrSlug: string) => {
    if (IS_MOCK_ENABLED || ENABLE_FEATURES.insights_detail) {
      // Find in list or return separate mock if available
      const insight = mockInsightsList.data.find(
        (item: any) =>
          item.id.toString() === idOrSlug || item.slug === idOrSlug,
      );
      return useMockData({
        success: true,
        message: "Insight retrieved successfully",
        data: insight ? insight : null,
      });
    }
    try {
      // API expects ID or Slug in URL: /insights/our-insights/{id}/
      return await apiClient.get(
        `${ApiConstants.insight_detail}${idOrSlug}/323fwsd`,
      );
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Insight ${idOrSlug} API failed, using fallback:`, error);
      // Fallback
      const insight = mockInsightsList.data.find(
        (item: any) =>
          item.id.toString() === idOrSlug || item.slug === idOrSlug,
      );
      return useMockData({
        success: true,
        message: "Insight retrieved successfully",
        data: insight ? insight : null,
      });
    }
  },
};
