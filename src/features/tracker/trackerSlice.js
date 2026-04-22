import { createSlice } from "@reduxjs/toolkit"

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    activities: [],
    selectedDay: null,
    loading: false,
  },
  reducer: {
    setActivies: (state, action) => {
      state.activities = action.payload
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload
    },
  },
})

export const { setActivies, setSelectedDay } = trackerSlice.actions
export default trackerSlice.reducer
