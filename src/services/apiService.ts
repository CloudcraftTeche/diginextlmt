import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { LeadPayload } from "@/types/lead.types";

export const apiService = {
  createLead: (data: LeadPayload) => {
    return apiClient.post(ApiConstants.contact_leads_create, data);
  },
};
