import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
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

  getInsightById: async (id: string) => {
    if (IS_MOCK_ENABLED) {
      // Find in list or return separate mock if available
      const insight = mockInsightsList.data.find(
        (item) => item.id.toString() === id,
      );
      return useMockData({
        success: true,
        message: "Insight retrieved successfully",
        data: insight ? [insight] : [],
      });
    }
    try {
      return await apiClient.get(`${ApiConstants.insight_detail}${id}/`);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Insight ${id} API failed, using fallback:`, error);
      // Fallback
      const insight = mockInsightsList.data.find(
        (item) => item.id.toString() === id,
      );
      return useMockData({
        success: true,
        message: "Insight retrieved successfully",
        data: insight ? [insight] : [],
      });
    }
  },
};
