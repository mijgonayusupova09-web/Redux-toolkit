import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://6939486cc8d59937aa0725dd.mockapi.io/users";

export const getUser = createAsyncThunk("users/getUser", async () => {
  try {
    let response = await fetch(API)
    let data = await response.json()
    console.log(data)
    return data 
  } catch (error) {
    console.log(error)
  }
})

export const addUser = createAsyncThunk("users/addUser", async (user, { dispatch }) => {
  try {
    await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  dispatch(getUser());  
  } 
  catch  {
    console.log(error);
    
  };
});

export const editUser = createAsyncThunk("users/editUser", async (user, { dispatch }) => {
  try {
    await fetch(`${API}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  dispatch(getUser());
  } catch  {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id, { dispatch }) => {
  try {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  dispatch(getUser());
  } catch  {
    console.log(error);
    
  }
 
});

export const toggleStatus = createAsyncThunk(
  "users/toggleStatus",
  async (id, { getState, dispatch }) => {
    try {
      const user = getState().users.data.find((u) => u.id === id);
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user, status: !user.status }),
    });
    dispatch(getUser());
    } catch{
      console.log(error);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default usersSlice.reducer;
