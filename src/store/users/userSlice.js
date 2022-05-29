import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: null,
		email: null,
		login: null,
		role: 'USER',

	},
	reducers: {
		signIn: ( state, action ) => {
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.login = action.payload.login;
			state.role = action.payload.role;
		},
		signOut: ( state ) => {
			state.id = null;
			state.email = null;
			state.login = null;
			state.role = 'USER'
		}
	}
})

export const { signIn, signOut } = userSlice.actions
export default userSlice.reducer
