import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IhabitData, IhabitInput, IsingleHabit } from "../global/types";
import axios from "axios";
import { toast } from "react-toastify";

const initialState: IhabitData = {
  habits: [],
  labels: [],
  status: "idle",
};

export const addLabelThunk = createAsyncThunk(
  "/label/add/",
  async (
    { label, token }: { label: string; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "/api/labels/add",
        {
          label: label,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      rejectWithValue(err.response.data.error);
    }
  }
);

export const deleteLabelThunk = createAsyncThunk(
  "/label/delete",
  async (
    { label, token }: { label: string; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.delete("/api/labels/" + label, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      rejectWithValue(err.response.data.error);
    }
  }
);

export const addHabitThunk = createAsyncThunk(
  "/habit/add",
  async (
    { habitInput, token }: { habitInput: IhabitInput; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "/api/habits/add",
        {
          habit: habitInput,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        return response.data.habits;
      }
    } catch (err: any) {
      rejectWithValue(err.response.data.error);
    }
  }
);

export const markedAsDoneThunk = createAsyncThunk(
  "/habit/done",
  async (
    { habit, token }: { habit: IsingleHabit; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "/api/habits/done/" + habit._id,
        {
          habit,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        return response.data.habits;
      }
    } catch (err: any) {
      rejectWithValue(err.response.data.error);
    }
  }
);

export const editHabitThunk = createAsyncThunk(
  "/habit/edit",
  async (
    { habit, token }: { habit: IsingleHabit; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "/api/habits/edit/" + habit._id,
        {
          habit,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        return response.data.habits;
      }
    } catch (err: any) {
      rejectWithValue(err.response.data.error);
    }
  }
);

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    logout: (state: IhabitData) => {
      return initialState;
    },
    setHabitData: (state: IhabitData, action: PayloadAction<IhabitData>) => {
      state.habits = action.payload.habits;
      state.labels = action.payload.labels;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addLabelThunk.fulfilled, (state, action) => {
      state.labels = action.payload.labels;
    });
    builder.addCase(deleteLabelThunk.fulfilled, (state, action) => {
      state.labels = action.payload.labels;
    });
    builder.addCase(addHabitThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(addHabitThunk.fulfilled, (state, action) => {
      state.habits = action.payload;
      state.status = "success";
      toast.success("Habit Added");
    });
    builder.addCase(addHabitThunk.rejected, (state, action) => {
      toast.error("Add Habit Failed");
    });
    builder.addCase(markedAsDoneThunk.fulfilled, (state, action) => {
      state.habits = action.payload;
    });
    builder.addCase(markedAsDoneThunk.rejected, (state, action) => {
      toast.error("Marking failed!");
    });
    builder.addCase(editHabitThunk.fulfilled, (state, action) => {
      state.habits = action.payload;
      toast.success("Habit Edited");
    });
    builder.addCase(editHabitThunk.rejected, (state, action) => {
      toast.error("Habit edit Failed");
    });
  },
});

export const habitActions = habitSlice.actions;
