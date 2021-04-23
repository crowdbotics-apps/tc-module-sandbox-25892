import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "./api"

export const get_terms = createAsyncThunk(
  "terms-and-conditions/get_terms",
  async ({ id }) => {
    const response = await api.get_terms()
    return response.data
  }
)



const initialState = { terms: {}, api: { loading: "idle", error: null } }

export const slice = createSlice({
  name: "terms-and-conditions",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    
    [get_terms.pending]: state => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [get_terms.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.terms[action.payload.id] = action.payload //check this later, as wiring things up.
        state.api.loading = "idle"
      }
    },
    [get_terms.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
