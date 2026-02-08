export interface Location {
  id: number;
  location: string;
  heading: string;
  description: string;
  image: string;
  video_url?: string; // Optional field for video content
  created_at?: string;
  updated_at?: string;
}

export interface LocationResponse {
  success: boolean;
  message: string;
  data: Location | Location[];
}
