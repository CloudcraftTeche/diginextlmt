import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { mockLocationList } from "@/mocks/location/locationList.mock";
import { Location, LocationResponse } from "@/types/location";
import { slugify } from "@/lib/utils";
import axios from "axios";

export const LocationService = {
  getLocations: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockLocationList);
    }
    try {
      // Future API integration
      // return await apiClient.get(ApiConstants.locations);
      return useMockData(mockLocationList);
    } catch (error) {
      console.warn("Location List API failed:", error);
      return useMockData(mockLocationList);
    }
  },

  getLocationById: async (id: number | string) => {
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
      // Future API integration
      // return await apiClient.get(ApiConstants.location_detail(id));
      const location = mockLocationList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Location retrieved successfully",
        data: location || null,
      });
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

  getLocationBySlug: async (slug: string) => {
    // Helper to find location by slugifying the location name
    if (IS_MOCK_ENABLED) {
      const location = mockLocationList.data.find(
        (item) => slugify(item.location) === slug,
      );
      return useMockData({
        success: true,
        message: "Location retrieved successfully",
        data: location || null,
      });
    }
    try {
      // If API supports slug, use it. Otherwise fetch all and filter.
      // For now, using mock logic as fallback
      const location = mockLocationList.data.find(
        (item) => slugify(item.location) === slug,
      );
      return useMockData({
        success: true,
        message: "Location retrieved successfully",
        data: location || null,
      });
    } catch (error) {
      console.warn(`Location Detail API failed for slug ${slug}:`, error);
      const location = mockLocationList.data.find(
        (item) => slugify(item.location) === slug,
      );
      return useMockData({
        success: true,
        message: "Location retrieved successfully",
        data: location || null,
      });
    }
  },

  getAllLocationSlugs: async () => {
    // Helper for static params
    return mockLocationList.data.map((item) => slugify(item.location));
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
