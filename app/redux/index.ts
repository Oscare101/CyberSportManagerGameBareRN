import {configureStore} from '@reduxjs/toolkit';
import tournamentsReducer from './tournaments';
import teamsReducer from './teams';
import themeReducer from './theme';
import freePlayersReducer from './freePlayers';
import availableTransfersReducer from './availableTransfers';
import challengerStageReducer from './challengerStage';

export const store = configureStore({
  reducer: {
    tournaments: tournamentsReducer,
    teams: teamsReducer,
    theme: themeReducer,
    freePlayers: freePlayersReducer,
    availableTransfers: availableTransfersReducer,
    challengerStage: challengerStageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
