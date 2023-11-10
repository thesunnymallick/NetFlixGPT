import { createSlice } from '@reduxjs/toolkit';

const apiConfigurationSlice = createSlice({
  name: 'Configuration',
  initialState: { imagesUrl: [] },
  reducers: {
    addUrl: (state, action) => {
      state.imagesUrl = action.payload;
    },
  },
});

export const { addUrl } = apiConfigurationSlice.actions;
export default apiConfigurationSlice.reducer;
