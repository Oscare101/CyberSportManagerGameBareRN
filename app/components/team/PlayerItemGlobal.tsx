import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {Theme} from '../../constants/interfaces/iconInterfaces';
import {Player} from '../../constants/interfaces/playerTeamInterfaces';
import colors from '../../constants/colors';
import StatBlock from './StatBlock';
import {useNavigation} from '@react-navigation/native';
import RoleImage from '../icons/RoleImage';
import TeamImage from '../icons/TeamImage';
import globalStyles from '../../constants/globalStyles';

const width = Dimensions.get('screen').width;

function PlayerItem(props: {
  item: any;
  theme: Theme['value'];
  players: Player[];
  teamIcon?: boolean;
  index: number;
}) {
  const player: Player = props.item;
  const navigation: any = useNavigation();

  return (
    <View style={globalStyles.rowCenter}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (true) {
            navigation.navigate('OtherPlayerInfoScreen', {player: player});
          } else {
            navigation.navigate('PlayerInfoScreen', {player: player});
          }
        }}
        style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
        <Text style={[styles.index, {color: colors[props.theme].comment}]}>
          {props.index}
        </Text>

        {player.team ? (
          <TeamImage team={player.team} size={width * 0.05} />
        ) : (
          <></>
        )}

        <Text
          numberOfLines={1}
          style={[
            styles.name,
            {
              color: colors[props.theme].main,
              marginLeft: props.teamIcon ? width * 0.02 : 0,
            },
          ]}>
          {player.name}
        </Text>
        <Text style={[styles.index, {color: colors[props.theme].comment}]}>
          {player.stat.role}
        </Text>
        <RoleImage
          role={player.stat.role}
          size={width * 0.04}
          color={colors[props.theme].comment}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    alignSelf: 'center',
    height: width * 0.08,
    marginVertical: width * 0.01,
    borderRadius: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.01,
  },
  index: {
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
    marginRight: width * 0.02,
  },
  name: {
    fontSize: width * 0.04,
    flex: 1,
  },
});
export default memo(PlayerItem);
