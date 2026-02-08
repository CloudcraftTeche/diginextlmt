export interface CareerSection {
  heading: string;
  points: string[];
}

export interface CareerPost {
  id: number;
  icon: string;
  heading: string;
  description: string;
  experience: string;
  type: string;
  job_type: string;
  sections: CareerSection[];
  created_at: string;
  updated_at: string;
}

export const mockCareerList = {
  success: true,
  message: "Career posts retrieved successfully",
  data: [],
};
