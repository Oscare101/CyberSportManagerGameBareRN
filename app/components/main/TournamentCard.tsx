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

  const tier1Invited: boolean = !!currentPeriod
    .find((t: Tournament) => t.tier === 1)
    ?.teams?.find((t: Team) => t.yourTeam);

  if (tier1Invited) {
    console.log('tier 1');
  } else {
    console.log('no');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {}}
      style={styles.card}>
      <View style={globalStyles.columnCenter}>
        <Text style={[styles.comment, {color: colors[themeColor].comment}]}>
          {text.Current}
        </Text>
        <Text style={[styles.value, {color: colors[themeColor].main}]}>
          {currentTournament?.name.split(' ')[0]}
        </Text>
      </View>
      {/* <CupsImage cup={currentTournament.cup} size={width * 0.15} /> */}
      <View style={globalStyles.columnCenter}>
        <Text style={[styles.comment, {color: colors[themeColor].comment}]}>
          {text.Prize}
        </Text>
        {/* <Text style={[styles.value, {color: colors[themeColor].main}]}>
          {GetMoneyAmountString(
            currentTournament?.prizes.reduce(
              (a: number, b: number) => a + b,
              0,
            ),
          )}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: width * 0.03,
    width: '100%',
    height: width * 0.2,
    borderRadius: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comment: {fontSize: width * 0.04},
  value: {
    fontSize: width * 0.04,
  },
});
