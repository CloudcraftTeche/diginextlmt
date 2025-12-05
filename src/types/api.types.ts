export interface LeadPayload {
  fullname: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service: string;
  message: string;
  submitted_at: string;
}
export interface SubscribePayload{
  email:string
}