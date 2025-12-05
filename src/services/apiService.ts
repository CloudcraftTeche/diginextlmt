import { ApiConstants } from "@/constants/apiConstants";
import apiClient from "@/lib/axiosInstance";
import { LeadPayload, SubscribePayload } from "@/types/api.types";

export const apiService = {
  createLead: (data: LeadPayload) => {
    return apiClient.post(ApiConstants.contact_leads_create, data);
  },
  createSubscribe:(data:SubscribePayload)=>{
    return apiClient.post(ApiConstants.api_subscribe_create, data);

  }
};
