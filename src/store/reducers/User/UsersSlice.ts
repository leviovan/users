import { appAPI } from './../../../servises/api/Api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from './usersType'
import axios from 'axios';

type IState = {
    isLoading: boolean
    users: IUser[]
    error: null | string
    activeUser: number,
    editProofile: boolean,
}

const initialState: IState = {
    isLoading: false,
    users: [],
    error: null,
    activeUser: 0,
    editProofile: false,
}

export const getUsers = createAsyncThunk('get/users',
    async (_, { rejectWithValue }) => {
        try {
            const response = await appAPI.getUsers()
            const result = response.data;
            return result
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }
        }
    }
)

const userSlice = createSlice({
    name: 'UsersSlice',
    initialState,
    reducers: {
        resetState: () => initialState,
        sortedByCompany(state) {
            state.users = state.users.sort((a: IUser, b: IUser) => (a.company.name.localeCompare(b.company.name)));
        },
        sortedByAddress(state) {
            state.users = state.users.sort((a: IUser, b: IUser) => (a.address.city.localeCompare(b.address.city)));
        },
        setUser(state, action) {
            console.log(action.payload);

            state.activeUser = action.payload;
        },
        toogleEdit(state) {
         console.log(state.editProofile);
            state.editProofile = !state.editProofile;
        },

    },
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [getUsers.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.paylaod
        },
        [getUsers.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.users = action.payload
        }
    }

})
export const { sortedByAddress, sortedByCompany, setUser, toogleEdit } = userSlice.actions
export default userSlice.reducer;
