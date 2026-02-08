import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { ApiConstants } from "@/constants/apiConstants";
// import { ApiConstants } from "@/constants/apiConstants"; // Future use
import apiClient from "@/lib/axiosInstance";
import { mockBlogList } from "@/mocks/blog/blogList.mock";
import axios from "axios";

export const BlogService = {
  getBlogPosts: async () => {
    if (IS_MOCK_ENABLED) {
      return useMockData(mockBlogList);
    }
    try {
      // Future API integration
      return await apiClient.get(ApiConstants.blog_posts);
      return useMockData(mockBlogList); // Fallback until API is ready
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn("Blog List API failed:", error);
      return useMockData(mockBlogList);
    }
  },

  getBlogPostById: async (id: number | string) => {
    if (IS_MOCK_ENABLED) {
      const post = mockBlogList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Blog post retrieved successfully",
        data: post || null,
      });
    }
    try {
      // Future API integration
      return await apiClient.get(ApiConstants.blog_post_detail(id));
      /*
      const post = mockBlogList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Blog post retrieved successfully",
        data: post || null,
      });
      */
    } catch (error) {
      if (axios.isCancel(error)) throw error;
      console.warn(`Blog Detail API failed for ID ${id}:`, error);
      const post = mockBlogList.data.find(
        (item) => item.id.toString() === id.toString(),
      );
      return useMockData({
        success: true,
        message: "Blog post retrieved successfully",
        data: post || null,
      });
    }
  },

  getRelatedPosts: async (category: string, currentId: number | string) => {
    // Mock logic for related posts since API might optionally support this or we filter client-side
    // But keeping it in service is good practice
    if (IS_MOCK_ENABLED) {
      const related = mockBlogList.data
        .filter(
          (post) =>
            post.category === category &&
            post.id.toString() !== currentId.toString(),
        )
        .slice(0, 3);
      return useMockData({
        success: true,
        message: "Related posts retrieved",
        data: related,
      });
    }
    // Fallback
    const related = mockBlogList.data
      .filter(
        (post) =>
          post.category === category &&
          post.id.toString() !== currentId.toString(),
      )
      .slice(0, 3);
    return useMockData({
      success: true,
      message: "Related posts retrieved",
      data: related,
    });
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
