// src/mocks/homeBanners.mock.ts

import { ImageConstants } from "@/constants/ImageConstants";

export const mockHomeBanners = {
  success: true,
  message: "Home banners retrieved successfully",
  data: [
    {
      id: 3,
      title: "Discover",
      description:
        "Discover the true potential of your business by transforming complicated IT into a simple, clear strategy for business optimization.",
      image: ImageConstants.HOME_DISCOVERT_1,
      is_active: true,
      created_at: "2026-01-20T18:29:53.188735Z",
      updated_at: "2026-01-20T18:29:53.188752Z",
    },
    {
      id: 4,
      title: "Connect",
      description:
        "Connect with trusted, proactive, 24/7 IT support that ensures company continuity and manages your systems with ease.",
      image: ImageConstants.HOME_CONNECT_1,
      is_active: true,
      created_at: "2026-01-20T18:30:47.785794Z",
      updated_at: "2026-01-20T18:30:47.785810Z",
    },
    {
      id: 5,
      title: "Grow",
      description:
        "Grow your business confidently on a secure infrastructure that is optimized while we take care of all technical management and strategic growth.",
      image: ImageConstants.HOME_GROWTH_1,
      is_active: true,
      created_at: "2026-01-20T18:31:16.798076Z",
      updated_at: "2026-01-20T18:31:16.798091Z",
    },
  ],
};
