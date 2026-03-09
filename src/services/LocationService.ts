import { IS_MOCK_ENABLED } from "@/config/appConfig";
import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { mockLocationList } from "@/mocks/location/locationList.mock";

export const LocationService = {
  getLocations: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockLocationList);
    }
    try {
      return await apiClient.get(ApiConstants.locations);
    } catch (error) {
      console.warn("Location List API failed:", error);
      return useMockData(mockLocationList);
    }
  },

  getLocationById: async (id: number) => {
    if (IS_MOCK_ENABLED) {
      const location = mockLocationList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Location retrieved successfully",
        data: location || null,
      });
    }
    try {
      console.log(`Fetching location ID: ${id} from API...`);
      const response = await apiClient.get(ApiConstants.location_detail(id));
      console.log(
        `API Response for ID ${id}:`,
        response.data?.success ? "Success" : "Failed",
      );
      return response;
    } catch (error) {
      console.warn(`Location Detail API failed for ID ${id}:`, error);
      const location = mockLocationList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Location retrieved successfully",
        data: location || null,
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
