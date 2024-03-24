import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import globalStyles from '../constants/globalStyles';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../constants/colors';
import Header from '../components/Header';
import text from '../constants/text';
import TournamentTopBlock from '../components/tournament/TournamentTopBlock';
import {Tournament} from '../constants/interfaces/tournamentInterfaces';
import RenderPrizes from '../components/tournament/RenserPrizes';
import PageSelectionBlock from '../components/tournament/PageSelectionBlock';
import {updateTournaments} from '../redux/tournaments';
import {
  CanStartTournament,
  MakeTournamentSingleEliminationGrid,
} from '../functions/tournamentFunctions';
import {Team} from '../constants/interfaces/playerTeamInterfaces';
import TournamentGridBlock from '../components/tournament/TournamentGridBlock';
import {ScrollView} from 'react-native-gesture-handler';
import StartTournamentBlock from '../components/tournament/StartTournamentBlock';

interface PageInterface {
  value: 'grid' | 'prize';
}

const width = Dimensions.get('screen').width;

export default function TournamentScreen({navigation, route}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );
  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const dispatch = useDispatch();
  const [page, setPage] = useState<PageInterface['value']>('grid');

  function GetCurrentTournament() {
    return tournaments.find(
      (t: Tournament) =>
        t.season === route.params.tournament.season &&
        t.period === route.params.tournament.period &&
        t.name === route.params.tournament.name,
    ) as Tournament;
  }

  const setNewPage = useCallback(
    (value: PageInterface['value']) => {
      setPage(value);
    },
    [page],
  );

  //  function AutoMatch() {
  //    dispatch(
  //      updateTournaments(
  //        AutoMatchColumn(GetCurrentTournament(), tournaments, bestOfMaps),
  //      ),
  //    );
  //  }

  return (
    <View
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <Header title={route.params.tournament.name} action="back" />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <TournamentTopBlock tournament={route.params.tournament} />
        <PageSelectionBlock page={page} setPage={setNewPage} />

        <View style={page === 'grid' ? {} : {display: 'none'}}>
          {GetCurrentTournament() &&
          GetCurrentTournament()?.grid &&
          GetCurrentTournament()?.grid.length ? (
            <TournamentGridBlock
              tournament={GetCurrentTournament() as Tournament}
            />
          ) : (
            <StartTournamentBlock tournament={GetCurrentTournament()} />
          )}
        </View>
        <View style={page === 'prize' ? {} : {display: 'none'}}>
          <RenderPrizes tournament={GetCurrentTournament()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
