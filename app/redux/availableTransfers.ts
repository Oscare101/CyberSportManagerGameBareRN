import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AvailableTransfer} from '../constants/interfaces/playerTeamInterfaces';

const initialState: AvailableTransfer = {
  season: 0,
  players: [],
};

const availableTransfersSlice = createSlice({
  name: 'availableTransfers',
  initialState,
  reducers: {
    updateAvailableTransfers: (
      state,
      action: PayloadAction<AvailableTransfer>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {updateAvailableTransfers} = availableTransfersSlice.actions;
export default availableTransfersSlice.reducer;
