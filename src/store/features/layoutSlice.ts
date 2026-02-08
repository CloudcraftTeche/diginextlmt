import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LayoutService } from "@/services/LayoutService";

interface LayoutState {
  navbarData: any;
  footerData: any;
  loading: boolean;
  error: string | null;
}

const initialState: LayoutState = {
  navbarData: null,
  footerData: null,
  loading: false,
  error: null,
};

export const fetchNavbarData = createAsyncThunk(
  "layout/fetchNavbarData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await LayoutService.getNavbarData();
      if (response.data && response.data.success) {
        return response.data;
      }
      return rejectWithValue("Failed to fetch navbar data");
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch navbar data");
    }
  },
);

export const fetchFooterData = createAsyncThunk(
  "layout/fetchFooterData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await LayoutService.getFooter();
      if (response.data && response.data.success) {
        return response.data;
      }
      // If mock response structure
      if (response.data) return response.data;

      return rejectWithValue("Failed to fetch footer data");
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch footer data");
    }
  },
);

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNavbarData.fulfilled, (state, action) => {
        state.loading = false;
        state.navbarData = action.payload;
      })
      .addCase(fetchNavbarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchFooterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.loading = false;
        state.footerData = action.payload;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default layoutSlice.reducer;
