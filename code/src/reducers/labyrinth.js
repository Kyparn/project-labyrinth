import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null
    // currentPosition: [],
    // loading: false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload
    },

    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

// export const generateLabyrinth = (username) => {
//   return (dispatch, getState) => {
//     fetch('https://labyrinth-technigo.herokuapp.com/start', {
//       method: 'POST',
//       headers: {
//         'Content type': 'application/json',
//       },
//       body: JSON.stringify({ username }),
//     })
//       .then((res) => res.json())
//       .then((data) => dispatch(labyrinth.actions.setUserName(username)))
//   }
// }
export default labyrinth