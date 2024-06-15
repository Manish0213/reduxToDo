import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchtasks = createAsyncThunk('tasks/fetchtasks', async () => {
  const response = await fetch(`http://localhost:5000/task/fetchtasks`);
  return response.json();
});

export const addtask = createAsyncThunk('tasks/addtask', async (newTask) => {
  const response = await fetch(`http://localhost:5000/task/addtask`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newTask),
  });
  return response.json();
});

export const deletetask = createAsyncThunk('tasks/deletetask', async (id) => {
  const response = await fetch(`http://localhost:5000/task/deletetask/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    }
  });
  return response.json();
});

export const updatetask = createAsyncThunk('tasks/updatetask', async (task) => {
  const response = await fetch(`http://localhost:5000/task/updatetask/${task._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
});

const initialState = {
  tasks: [],
  status: 'idle',
  error: null
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchtasks.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchtasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
    });
    builder.addCase(fetchtasks.rejected, (state, action) => {  
      state.status = 'failed';
      state.error = action.error.message;  
    });

    builder.addCase(addtask.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(addtask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
    builder.addCase(addtask.rejected, (state, action) => {  
      state.status = 'failed';
      state.error = action.error.message;  
    });

    builder.addCase(deletetask.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(deletetask.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload._id);
    });
    builder.addCase(deletetask.rejected, (state, action) => {  
      state.status = 'failed';
      state.error = action.error.message;  
    });

    builder.addCase(updatetask.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(updatetask.fulfilled, (state, action) => {
      state.tasks.forEach((task) => {
        if(task._id === action.payload._id)
          task.title = action.payload.title;
          task.description = action.payload.description;
      })
        // const updatedTask = action.payload;
        // const index = state.tasks.findIndex(task => task._id === updatedTask._id);
        // if (index !== -1) {
        //   state.tasks[index] = updatedTask;
        // }
    });
    builder.addCase(updatetask.rejected, (state, action) => {  
      state.status = 'failed';
      state.error = action.error.message;  
    }); 
  },
})

export default todoSlice.reducer