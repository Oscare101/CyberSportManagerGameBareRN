import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import colors from '../../constants/colors';
import {Stat} from '../../constants/interfaces/iconInterfaces';
import Icon from '../icons/Icon';
import StatImage from '../icons/StatImage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import text from '../../constants/text';
import {Team} from '../../constants/interfaces/playerTeamInterfaces';
import {
  SetTeamsPlayersStatAfterPractice,
  PracticePrice,
} from '../../functions/playerFunctions';
import globalStyles from '../../constants/globalStyles';
import {GetMoneyAmountString, IsEnoughtMoney} from '../../functions/function';
import Button from '../Button';
import {updateTeams} from '../../redux/teams';
import {useState} from 'react';

const width = Dimensions.get('screen').width;

export default function PracticeModal() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const teams: Team[] = useSelector((state: RootState) => state.teams);
  const myTeam: Team = teams.find((t: Team) => t.yourTeam) as Team;
  const dispatch = useDispatch();

  const data = [
    {
      title: text.PraciceCost,
      value: GetMoneyAmountString(PracticePrice(myTeam)),
    },
    {title: text.AvailableMoney, value: GetMoneyAmountString(myTeam.bank.cash)},
  ];

  function PracticeFunc() {
    dispatch(updateTeams(SetTeamsPlayersStatAfterPractice(myTeam, teams)));
  }

  return (
    <>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        {text.Practice}
      </Text>
      {data.map((item: any, index: number) => (
        <View
          style={[
            globalStyles.rowBetween,
            {width: '92%', marginVertical: width * 0.01},
          ]}
          key={index}>
          <Text style={[styles.dataTitle, {color: colors[themeColor].main}]}>
            {item.title}
          </Text>
          <Text style={[styles.dataValue, {color: colors[themeColor].main}]}>
            {item.value}
          </Text>
        </View>
      ))}
      <Text style={[styles.text, {color: colors[themeColor].greys[4]}]}>
        {text.PracticeDescription}
      </Text>
      <View style={{flex: 1}} />
      <Button
        disable={!IsEnoughtMoney(myTeam.bank.cash, PracticePrice(myTeam))}
        buttonStyles={
          !IsEnoughtMoney(myTeam.bank.cash, PracticePrice(myTeam))
            ? {backgroundColor: colors[themeColor].red.bg}
            : {}
        }
        titleStyles={
          !IsEnoughtMoney(myTeam.bank.cash, PracticePrice(myTeam))
            ? {
                color: colors[themeColor].red.main,
                fontWeight: '300',
                fontSize: width * 0.06,
              }
            : {}
        }
        title={
          !IsEnoughtMoney(myTeam.bank.cash, PracticePrice(myTeam))
            ? text.NotEnoughMoney
            : text.Practice
        }
        action={PracticeFunc}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.08,
    textAlign: 'center',
    marginBottom: width * 0.03,
  },
  dataTitle: {
    fontSize: width * 0.05,
  },
  dataValue: {
    fontSize: width * 0.05,
  },
  text: {fontSize: width * 0.05, width: '92%', marginVertical: width * 0.02},
});
