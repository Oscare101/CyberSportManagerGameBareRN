import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Player} from '../constants/interfaces/playerTeamInterfaces';

const initialState: Player[] = [];

const freePlayersSlice = createSlice({
  name: 'freePlayers',
  initialState,
  reducers: {
    updateFreePlayers: (state, action: PayloadAction<Player[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const {updateFreePlayers} = freePlayersSlice.actions;
export default freePlayersSlice.reducer;
