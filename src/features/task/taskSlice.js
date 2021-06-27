import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasksList: []
	},
	reducers: {
		setTasks: (state, action) => {
			console.log(state, action);
			state.tasksList = action.payload;
		}
	}
});

export const { setTasks } = taskSlice.actions;

export const selectTaks = (state) => state.tasks.tasksList;

export default taskSlice.reducer;
