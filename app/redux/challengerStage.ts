import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChallengerStage} from '../constants/interfaces/tournamentInterfaces';

const initialState: ChallengerStage = {
  season: 0,
  period: 1,
  teams: [],
};

const challengerStageSlice = createSlice({
  name: 'challengerStage',
  initialState,
  reducers: {
    updateChallengerStage: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {updateChallengerStage} = challengerStageSlice.actions;
export default challengerStageSlice.reducer;
