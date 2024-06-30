import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  // yaha user null karne se jab hmm login kar kar rahe the to login go jaa raha tha but jaise hi page ko refresh kar rahe the to profiledropdown hatt jaa raha tha...yaha par ab jaise token le rahe the waise user lenge local storage se
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setUser, setLoading } = profileSlice.actions;

export default profileSlice.reducer;
