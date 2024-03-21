import {configureStore} from '@reduxjs/toolkit';
import tournamentsReducer from './tournaments';
import teamsReducer from './teams';
import themeReducer from './theme';
import freePlayersReducer from './freePlayers';
import availableTransfersReducer from './availableTransfers';

export const store = configureStore({
  reducer: {
    tournaments: tournamentsReducer,
    teams: teamsReducer,
    theme: themeReducer,
    freePlayers: freePlayersReducer,
    availableTransfers: availableTransfersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
