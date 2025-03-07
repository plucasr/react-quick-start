import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastMessage {
  id: string;
  message: string;
}

interface ApplicationState {
  loading: boolean;
  toastMessages: ToastMessage[];
}

const initialState: ApplicationState = {
  loading: false,
  toastMessages: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    addToastMessage: (state, action: PayloadAction<ToastMessage>) => {
      state.toastMessages.push(action.payload);
    },
    removeToastMessage: (state, action: PayloadAction<string>) => {
      state.toastMessages = state.toastMessages.filter(
        (msg) => msg.id !== action.payload
      );
    },
  },
});

export const { setLoading, addToastMessage, removeToastMessage } =
  applicationSlice.actions;
export default applicationSlice.reducer;
