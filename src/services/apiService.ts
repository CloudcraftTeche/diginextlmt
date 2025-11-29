import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";

export const apiService = {
  createLead: (data: any) => {
    return apiClient.post(ApiConstants.contact_leads_create, data);
  }
};