// src/services/ContactService.ts

import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { LeadPayload } from "@/types/api.types";
import axios from "axios";

const useMockData = async <T>(mockData: T, delay = 300) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.resolve({ data: mockData });
};

export const ContactService = {
  createLead: async (data: LeadPayload) => {
    if (IS_MOCK_ENABLED) {
      return useMockData(
        {
          success: true,
          message:
            "Message sent successfully! We'll get back to you within 24 hours.",
          data: null,
        },
        800,
      );
    }

    try {
      return await apiClient.post(ApiConstants.contact_leads_create, data);
    } catch (error) {
      if (axios.isCancel(error)) {
        throw error;
      }
      throw error;
    }
  },
};
