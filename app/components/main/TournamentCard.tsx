import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import colors from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
import text from '../../constants/text';
import {Tournament} from '../../constants/interfaces/tournamentInterfaces';
import {
  CurrentTournament,
  CurrentTournamentStage,
} from '../../functions/tournamentFunctions';
import CupsImage from '../icons/CupsImage';
import {GetMoneyAmountString} from '../../functions/function';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';

const width = Dimensions.get('screen').width;

export default function TournamentCard() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  const navigation: any = useNavigation();

  const currentTournament = CurrentTournament(tournaments);

  const currentPeriod: Tournament[] = CurrentTournamentStage(
    tournaments,
  ) as Tournament[];

  const tier1 = currentPeriod.find((t: Tournament) => t.tier === 1);
  const tier2 = currentPeriod.find((t: Tournament) => t.tier === 2);

  const tier1Invited: boolean = !!tier1?.teams?.find((t: Team) => t.yourTeam);

  const tier2Invited: boolean = !!tier2?.teams?.find((t: Team) => t.yourTeam);

  function InviterCard(props: {tier: number; tournament: Tournament}) {
    return (
      <>
        <View style={globalStyles.columnCenter}>
          <Text style={[styles.comment, {color: colors[themeColor].comment}]}>
            {text.Current}
          </Text>
          <Text style={[styles.value, {color: colors[themeColor].main}]}>
            {props.tournament?.name.split(' ')[0]}
          </Text>
        </View>
        {props.tournament?.cup ? (
          <CupsImage cup={props.tournament.cup} size={width * 0.15} />
        ) : (
          <></>
        )}
        <View style={globalStyles.columnCenter}>
          <Text style={[styles.comment, {color: colors[themeColor].comment}]}>
            {text.Prize}
          </Text>
          <Text style={[styles.value, {color: colors[themeColor].main}]}>
            {props.tournament?.prizes &&
              GetMoneyAmountString(
                props.tournament?.prizes.reduce(
                  (a: number, b: number) => a + b,
                  0,
                ),
              )}
          </Text>
        </View>
      </>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {}}
      style={styles.card}>
      {tier1Invited && tier1 ? (
        <InviterCard tier={1} tournament={tier1} />
      ) : tier2Invited && tier2 ? (
        <InviterCard tier={2} tournament={tier2} />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: width * 0.03,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: width * 0.02,
  },
  comment: {fontSize: width * 0.04},
  value: {
    fontSize: width * 0.04,
  },
});
