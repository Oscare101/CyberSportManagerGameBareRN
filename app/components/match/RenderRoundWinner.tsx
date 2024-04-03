import {Dimensions, View} from 'react-native';
import {CalculateSide} from '../../functions/gameFunctions';
import rules from '../../constants/rules';
import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces/iconInterfaces';

const width = Dimensions.get('screen').width;

export default function RenderRoundWiner(
  item: string,
  index: number,
  roundWinLogs: string[],
  team1Name: string,
  team2Name: string,
  theme: Theme['value'],
) {
  function WinIndicator(props: any) {
    return (
      <View
        style={{
          width: '80%',
          height: '40%',
          backgroundColor:
            item === props.teamName
              ? CalculateSide(index + 1)[props.sideIndex] === 'CT'
                ? colors[theme].CTSide
                : colors[theme].TSide
              : '#0000000',
          borderRadius: width * 0.01,
          opacity: 0.8,
        }}
      />
    );
  }

  return (
    <View
      style={{
        width:
          (roundWinLogs.length > rules.MRsystem * 2
            ? width / roundWinLogs.length
            : width / (rules.MRsystem * 2)) * 0.95,
        height: width / 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderLeftWidth:
          CalculateSide(index)[0] !== CalculateSide(index + 1)[0] ? 1 : 0,
        borderColor: '#00000040',
      }}>
      <WinIndicator teamName={team1Name} sideIndex={0} theme={theme} />
      <View style={{width: '100%', height: 1, backgroundColor: '#00000040'}} />
      <WinIndicator teamName={team2Name} sideIndex={1} theme={theme} />
    </View>
  );
}
