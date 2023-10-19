import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserData=createAsyncThunk('fetchusers/users',async ()=>{
     const users=fetch("https://jsonplaceholder.typicode.com/posts")
})


const fetchuserslice=createSlice({
    name:"users",
    initialState:{},
    reducers:{},
    extraReducers:(builder)=>{
            builder
                .addCase(fetchUserData.pending,(state,action)=>{
                console.log("actionpayload",action.payload)
                console.log("action",action.type)
            })
            .addCase(fetchUserData.fulfilled,(state)=>{
                console.log("kjxhjkxgkj")
            })
    }


})

export default fetchuserslice.reducer


 

// const userSlice = createSlice({
//     name: 'user',
//     initialState: { data: null, status: 'idle', error: null },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchUserData.pending, (state) => {
//           state.status = 'loading';
//         })
//         .addCase(fetchUserData.fulfilled, (state, action) => {
//           state.status = 'succeeded';
//           state.data = action.payload;
//         })
//         .addCase(fetchUserData.rejected, (state, action) => {
//           state.status = 'failed';
//           state.error = action.error.message;
//         });
//     },
//   });