import { IS_MOCK_ENABLED } from "@/config/appConfig";
import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { mockCareerList, CareerPost } from "@/mocks/career/careerList.mock";
import axios from "axios";

export const CareerService = {
  getCareers: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockCareerList);
    }
    try {
      return await apiClient.get(ApiConstants.career);
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Career List API failed:", error);
      return useMockData(mockCareerList);
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
