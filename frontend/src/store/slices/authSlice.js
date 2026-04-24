import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {
    fullName: "Abdul Haque",
    email: "abdul@escrowflow.com",
    role: "Freelancer",
    bio: "Full-stack developer specializing in React and Node.js.",
    phone: "+91 9876543210",
    location: "India",
    avatar: null,
  },
  settings: JSON.parse(localStorage.getItem('settings')) || {
    theme: 'light',
    notifications: {
      email: true,
      push: true,
    }
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
      localStorage.setItem('settings', JSON.stringify(state.settings));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
});

export const { updateProfile, updateSettings, logout } = authSlice.actions;
export default authSlice.reducer;
