import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { mockFooterData } from "@/mocks/layout/footer.mock";
import axios from "axios";

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const LayoutService = {
  getFooter: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockFooterData);
    }
    try {
      return await apiClient.get(ApiConstants.footer);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Footer API failed, using fallback:", error);
      return useMockData(mockFooterData);
    }
  },
  getNavbarData: async () => {
    try {
      return await apiClient.get(ApiConstants.navbar_data);
    } catch (error) {
      console.warn("Navbar data API failed", error);
      throw error;
    }
  },
};
